import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';

import InspireMe from "./inspire-me";
import DisplayThoughts from "./display-thoughts";
import Header from "./header"

const AppContainer = ({ navigation }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}>
          <Header style={styles.header} />
          <InspireMe style={styles.inspireMe} />
          <View style={styles.thoughtList}> 
              <ScrollView>
                <DisplayThoughts />
              </ScrollView>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  inspireMe: {
    flex: 1
  },
  thoughtList: {
    flex: 4
  }
})

export default AppContainer;
