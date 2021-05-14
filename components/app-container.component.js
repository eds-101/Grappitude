import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';

import InspireMe from "./inspire-me.component";
import DisplayThoughts from "./display-thoughts.component";
// import AnalyseThoughts from "./analyse-thoughts.component";
import Header from "./header.component"

const AppContainer = ({ navigation }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        <View style={styles.container}>
          <Header style={styles.header} />
          <Button title="Go Home" onPress={ () => navigation.navigate('Home') } />
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
    flex: 2
  }
})

export default AppContainer;
