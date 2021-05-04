import React from 'react';
import { View } from 'react-native';
import styles from '../components/design.component.style';

export function progressBar(barWidth) {
  return (  
    <View>
    <View style={[styles.filler, {width: barWidth}]}/>
    <View style={styles.bar}/></View>
  )
}