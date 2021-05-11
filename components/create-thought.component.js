import React,  { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, TextInput, View } from 'react-native';
import axios from "axios";
import styles from './design.component.style';

export default class CreateThought extends Component {
  constructor(props) {
    super(props);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      thought: '',
    }
  }
  onChangeThought(thought) {
    this.setState({
      thought: thought
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/thoughts/add', {thought: this.state.thought} )
      .then(() => {
        const { afterThoughtCreated } = this.props

        if(afterThoughtCreated){
          afterThoughtCreated()
        }
      })
      this.setState({
        thought: ""
      });
  }

  render() {
   return (
     <View style={styles.container}>
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
     </View>
   );
 }
}

CreateThought.propTypes = {
  afterThoughtCreated: PropTypes.func
};