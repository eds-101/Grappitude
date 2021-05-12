import React,  { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import axios from "axios";

import styles from './design.component.style';
import { dateFormatter } from "../functions/date-formatter"

export default class DisplayThoughts extends Component {
  constructor(props) {
    super(props);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      thoughts: [],
      thought: ''
    }
  }

  componentDidMount = () => {
    this.getThoughts()
  }

  updateThoughts = (newThought) => {
    let refreshedThoughts = []
    refreshedThoughts.push(this.state.thoughts).push(newThought)
    this.setState({
      thoughts: refreshedThoughts,
      thought: ""
      })
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

  deleteThought = (thoughtId) => {
    axios.delete(`http://localhost:5000/${thoughtId}`).
    then(
    res => console.log(res.data),
    this.setState({ 
      thoughts: this.state.thoughts.filter(thought => thought._id !== thoughtId) 
    })
    )
  }

  onChangeThought(thought) {
    this.setState({
      thought: thought
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // add thought to db
       axios.post('http://localhost:5000/thoughts/add', {thought: this.state.thought} )
      .then(() => {
    // add new thought to state
        let newThought = { "_id": "609a4d377a9cd480a84903", "thought": this.state.thought, "createdAt": new Date, "updatedAt": new Date, "__v": 0 }
        console.log(newThought)
        console.log(this.state.thoughts.slice(0,3))
        this.setState({
        thoughts: this.state.thoughts.push(newThought),
        thought: ""
        })
    })
  }

  render() {
    
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
        { this.state.thoughts.slice().reverse().map(
          item => (
            <View key={item._id}>
              <Text style={ styles.thoughtsText }> {item.thought}</Text>
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