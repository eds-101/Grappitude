// async-storage not really that secure btw
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("async get error")
    console.log(e.message)
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.log("async set error")
    console.log(e.message)
    return null;
  }
};