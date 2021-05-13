import React from 'react';
import { View, Text, Button } from 'react-native'

import Form from '../../forms/Form';
import { login } from '../../api/authentication'

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Form
        action={login}
        buttonText="Submit"
        fields={{
          email: {
            label: 'Email',
            inputProps: {
              keyboardType: 'email-address',
            },
          },
          password: {
            label: 'Password',
            inputProps: {
              secureTextEntry: true,
            },
          },
        }}
      />
      <Button
        title="Not registered? Create an account"
        onPress={() => navigation.navigate('Create Account')}
      />
    </View>
  );
};

export default LoginScreen;