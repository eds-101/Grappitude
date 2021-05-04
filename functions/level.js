import React from 'react';
import { View, Text } from 'react-native';

export function level(healthLevel) {
  return (
    <View>
      <Text
      style={{
        textAlign: 'center'
      }}>
        Gratitude Level:{healthLevel}
      </Text>
    </View>
  )
}