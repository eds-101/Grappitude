import React,  { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import axios from "axios";
import Sentiment from 'sentiment'

import styles from './design.component.style';
import { dateFormatter } from "../functions/date-formatter"

export default class DisplayThoughts extends Component {
  constructor(props) {
    super(props);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.applySentiment = this.applySentiment.bind(this)
    this.state = {
      thoughts: [],
      thought: ''
    }
  }

  componentDidMount = () => {
    this.getThoughts()
  }

  getThoughts = () => {
    axios.get('http://localhost:5000/thoughts').
    then( (res) => {
      const data = res.data;
      this.setState({ thoughts: data });
    }).
    catch( () => {
      alert('Error retrieving data');
    });
  }

  deleteThought = async (thoughtId) => {
    const res = await axios.delete(`http://localhost:5000/thoughts/${thoughtId}`)
    console.log(res.data)
    this.setState({ 
      thoughts: this.state.thoughts.filter(thought => thought._id !== thoughtId) 
    })
  }

  onChangeThought(thought) {
    this.setState({
      thought: thought
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/thoughts/add', {thought: this.state.thought} )
    this.setState({
      thoughts: [...this.state.thoughts, { "_id": Date.now().toString(), "thought": this.state.thought, "createdAt": new Date} ],
      thought: ""
    })
  }

  emojiExpression = (score) => {
    if (score > 0) {return "✌🏻✌🏽✌🏿 vibes"}
    else if (score < 0) {return "🚨🚨🚨"}
    else {return "🙂"}
  }

  applySentiment = (thoughts) => {
    const analyzer = new Sentiment();
    
    return thoughts.map((t) => {
      return {
        ...t,
        sentiment: analyzer.analyze(t.thought)
      }
    })
  }
  
  render() {
    const analyzedThoughts = this.applySentiment(this.state.thoughts)

    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Type your thought here"
          value={this.state.thought}
          onChangeText={this.onChangeThought}
        />
        <Button
          style={styles.button}
          title="Submit"
          color='#F7C9B6'
          onPress={this.onSubmit}
        />
        { analyzedThoughts.slice().reverse().map(
          item => (
            <View key={item._id}>
              <Text style={ styles.thoughtsText }> {item.thought}</Text>
              <Text style={ styles.thoughtsText }> {this.emojiExpression(item.sentiment.score)}</Text>
              <Text style={ styles.thoughtsDate }> {dateFormatter(item.createdAt)}</Text>
              <Button
              title="Delete this"
              color='#EFCABA'
              onPress={ () => this.deleteThought(item._id) }
                />
            </View>
          ))
        }
      </View>
    )
  }
}