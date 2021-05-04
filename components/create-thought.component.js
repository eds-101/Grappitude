import React,  { Component } from 'react';
import { Text, Button, TextInput, View, Image } from 'react-native';
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
    const newthought = {
      thought: this.state.thought,
    }
    console.log(newthought);
    axios.post('http://localhost:5000/thoughts/add', newthought)
      .then(res => {
        const { afterThoughtCreated } = this.props

        if(afterThoughtCreated){
          afterThoughtCreated(res.data)
        }
      });
      this.state.thought = ""
  }

  render() {
   return (
     <View style={styles.container}>
       <Text
       style={styles.intro}>
          What are you grateful for today?</Text>
      <View style={styles.mainImg}>
        <Image source={{uri: 'https://asianartnewspaper.com/wp-content/uploads/2018/11/1-AMIDA-Buddha.jpg'}}
        style={{width: 120, height: 120 }} />
      </View>
      
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
