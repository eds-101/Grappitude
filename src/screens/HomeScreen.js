import React from 'react'
import { View, Text, Button } from 'react-native'
import { getUsers } from '../../api/users'
import { setToken } from '../../api/token'

export default class HomeScreen extends React.Component {
  state = { users: [], hasLoadedUsers: false, userLoadingErrorMessage: '' };

  loadUsers() {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers()
      .then((users) =>
        this.setState({
          hasLoadedUsers: true,
          users,
        }),
      )
      .catch(this.handleUserLoadingError);
  }

  handleUserLoadingError = (res) => {
    if (res.error === 401) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  }

  componentDidMount() {
    // didFocus event, where component is already mounted
    this.didFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        if (!this.state.hasLoadedUsers) {
          this.loadUsers();
          console.log('users reloaded')
        }
      }
    )
  }

  componentWillUnmount() {
    this.didFocusSubscription();
  }

  logOut = async () => {
    this.setState({ hasLoadedUsers: false, users: [] })
    // clear user data first
    await setToken('');
    this.props.navigation.navigate('Login');
  };

  render() {
    const { users, userLoadingErrorMessage } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>

        <Button title="Thoughts Feed" onPress={() => this.props.navigation.navigate('Thoughts Feed')} />
        <Button title="Reflection spots near you" onPress={() => this.props.navigation.navigate('Map')} />
        <Button title="Log out" onPress={ this.logOut } />
      </View>
    );
  }
}
        // {users.map((user) => (
        //   <Text key={user.email}>{user.email}</Text>
        // ))}
        // {userLoadingErrorMessage ? (
        //   <Text>{userLoadingErrorMessage}</Text>
        // ) : null}