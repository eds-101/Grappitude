import React from 'react';
import Form from '../../forms/Form';

const CreateAccount = ({ navigation }) => {
  return <Form />;
};

// const CreateAccount = ({ navigation }) => {
//   return (
//     <EmailForm
//       buttonText="Submit Details"
//       onSubmit={createAccount}
//       onAuthentication={() => navigation.navigate('Home')}
//     >
//       <Button
//         title="Already registered? Login instead"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </EmailForm>
//   );
// };

export default CreateAccount;