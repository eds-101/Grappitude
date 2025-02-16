import React from 'react';
import { View, Button } from 'react-native'

import Form from '../../forms/Form';
import { login } from '../../api/authentication'
import { setToken } from '../../api/token';
import { validateContent, validateLength } from '../../forms/validation';

const LoginScreen = ({ navigation }) => {
  const handleResult = async (result) => {
    if (result.ok && result.data) {
      await setToken(result.data.auth_token);
      navigation.navigate('Home');
    } else if (result.status === 401) {
      throw new Error('Invalid login.');
    } else {
      throw new Error('Something went wrong.');
    }
  };

  return (
    <View>
      <Form
        action={login}
        afterSubmit={handleResult}
        buttonText="Submit"
        fields={{
          email: {
            label: 'Email',
            validators: [validateContent],
            inputProps: {
              keyboardType: 'email-address',
            },
          },
          password: {
            label: 'Password',
            validators: [validateContent, validateLength],
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