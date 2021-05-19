import React, { useRef } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, Animated } from 'react-native';

const SubmitButton = ({ title, onPress, heightSize }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const handlePress = async () => {
    await onPress();
    Animated.spring(animationValue, {
      toValue: 1,
      useNativeDriver: true
    }).start(() => { Animated.spring(animationValue, {
      toValue: 0,
      useNativeDriver: true
      }).start();
    })
  };

  const transform = [
    {scale: 
      animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.95],
        })
    }
  ];

  return (
    <TouchableWithoutFeedback onPressIn={handlePress}>
      <Animated.View style={{ transform, ...styles.container }}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#EFCABA',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 250,
    elevation: 4,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubmitButton;