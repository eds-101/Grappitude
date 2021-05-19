import React from 'react';
import { View, Alert } from 'react-native';

import SubmitButton from '../forms/SubmitButton'

const InspireMe = () => {
  const submit = () => {
    return fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((json) => {
        const positiveQuote = json[(Math.floor(Math.random()*json.length))]
        Alert.alert(`${positiveQuote.text}` + ` - ${positiveQuote.author}`)
      })
      .catch((error) => {
        console.error(error)
      });
  }

   return (
     <View style={{
       alignItems: 'center', 
       justifyContent: 'center',
       height: 100
       }}>
      <SubmitButton title={"Inspire Me"} onPress={submit} />
     </View>
   );
}

export default InspireMe;
