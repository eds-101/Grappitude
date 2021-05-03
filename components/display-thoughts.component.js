import React,  { Component } from 'react';
import { FlatList, ScrollView, Text, View, Button, Alert } from 'react-native';
import axios from "axios";

import styles from './design.component.style';
import { dateFormatter } from "../functions/date-formatter"

export default class DisplayThoughts extends Component {
   constructor(props) {
    super(props);
    this.state = {
      thoughts: []
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

  deleteThought = (thoughtId) => {
    axios.delete(`http://localhost:5000/${thoughtId}`).
    then(
    res => console.log(res.data),
    this.setState({ 
      thoughts: this.state.thoughts.filter(thought => thought._id !== thoughtId) 
    })
    )
  }

  render() {
    
    return (
      <View>
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