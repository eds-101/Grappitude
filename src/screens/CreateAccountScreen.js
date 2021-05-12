import React from 'react';
import { Button } from 'react-native';
import { createAccount } from '../../api/authentication'
import EmailForm from '../../forms/EmailForm';

const CreateAccount = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Submit Details"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Already registered? Login instead"
        onPress={() => navigation.navigate('Login')}
      />
    </EmailForm>
  );
};

export default CreateAccount;