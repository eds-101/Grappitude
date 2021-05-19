import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  
container: {
  flex: 1,
  marginTop: 15,
  marginBottom: 15
  // margin: 15
},

title: {
  position: 'absolute',
  justifyContent: 'center', 
  alignItems: 'center',
  // marginTop: 60
},

intro: {
  flex: 1,
  top: 25,
  textAlign: 'center',
  color: '#EFCABA',
  fontSize: 40,
  textShadowColor: 'black',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 0
},

textInput: {
  flex: 0.5,
  textAlign: 'center',
  height: 50,
  fontSize: 18,
  width: '80%',
  borderColor: '#F7C9B6',
  borderRadius: 1,
  borderWidth: 3,
  marginLeft: 40,
},

thoughtsText: {
  fontSize: 18,
  textAlign: "center",
  marginBottom: 1
  },

thoughtsDate: {
  fontSize: 14,
  textAlign: "center",
  marginBottom: 1
  },

  })