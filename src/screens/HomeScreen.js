import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Thoughts Feed" onPress={() => navigation.navigate('Thoughts Feed')} />
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;