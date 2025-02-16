import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import AppContainer from "./components/app-container";
import Map from "./components/map";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to Grappitude' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // initialParams={{ user: 'me' }}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateAccountScreen}
          // initialParams={{ user: 'me' }}
        />
        <Stack.Screen
          name="Thoughts Feed"
          component={AppContainer}
        />
        <Stack.Screen
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
