import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './design';

export default class Header extends Component {
   render() {

    return(
     <View style={styles.container}>
        <Text
          style={styles.intro}>
          What are you grateful for today?
        </Text>
     </View>
    )
   }
}
