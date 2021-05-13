import React from 'react';
import { View, Button } from 'react-native'
import Form from '../../forms/Form';

const CreateAccount = ({ navigation }) => {
  return (
    <View>
    <Form
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
      title="Already registered? Login instead"
      onPress={() => navigation.navigate('Login')}
    />
    </View>
      )
};

export default CreateAccount;
