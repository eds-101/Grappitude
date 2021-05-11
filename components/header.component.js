import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './design.component.style';

export default class Header extends Component {
   render() {

    return(
     <View style={styles.container}>
        <Text
          style={styles.intro}>
          What are you grateful for today?
        </Text>
        <View style={styles.mainImg}>
          <Image source={{uri: 'https://asianartnewspaper.com/wp-content/uploads/2018/11/1-AMIDA-Buddha.jpg'}}
          style={{width: 120, height: 120 }} />
        </View>
     </View>
    )
   }
}
