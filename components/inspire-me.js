import React,  { Component } from 'react';
import { View, Alert } from 'react-native';

import SubmitButton from '../forms/SubmitButton'


export default class InspireMe extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    return fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((json) => {
        const positiveQuote = json[(Math.floor(Math.random()*json.length))];
        Alert.alert(`${positiveQuote.text}` + ` - ${positiveQuote.author}`)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
   return (
     <View>
      <SubmitButton title={"Inspire Me"} onPress={this.onSubmit} />
     </View>
   );
 }
}
