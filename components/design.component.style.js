import { StyleSheet } from 'react-native'

export default StyleSheet.create({
bar: {
  marginTop: 20,
  height: 40,
  width: '100%',
  borderRadius: 10,
  borderWidth: 5,
  borderColor: '#6EC0D4'
 },
  
filler: {
  height: 30,
  // width: '50%',
  borderWidth: 15,
  borderRadius: 5,
  borderColor: '#EFCABA',
  position: 'absolute',
  marginTop: 25
  },
  
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
  marginTop: 60
},

intro: {
  flex: 1,
  top: 25,
  textAlign: 'center',
  color: '#EFCABA',
  fontSize: 40,
  textShadowColor: '#6EC0D4',
  textShadowOffset: {width: -1, height: 2},
  textShadowRadius: 0
},

mainImg: {
  flex: 1,
  justifyContent: 'center', 
  alignItems: 'center'
},

textInput: {
  flex: 0.5,
  textAlign: 'center',
  width: '80%',
  borderColor: '#F7C9B6',
  borderRadius: 1,
  borderWidth: 1,
  marginLeft: 40,
},

image: {
  width: '100%',
  },

thoughtsStyle: {
  marginTop: 40,
  margin: 10,
  marginBottom: 0
  },

thoughtsText: {
  textAlign: "center",
  marginBottom: 10
  },

button: {
  flex: 1
},

  })