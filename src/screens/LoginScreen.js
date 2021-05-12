import React from 'react';
import { Button } from 'react-native';
import { login } from '../../api/authentication';
import EmailForm from '../../forms/EmailForm'
// import { setToken } from '../api/token';

const LoginScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Log into the app"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Not registered? Create an account"
        onPress={() => navigation.navigate('Create Account')}
      />
    </EmailForm>
  );
};

export default LoginScreen;