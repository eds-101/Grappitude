import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import axios from "axios";

import CreateThought from "./create-thought.component";
import InspireMe from "./inspire-me.component";
import DisplayThoughts from "./display-thoughts.component";
import { level } from "../functions/level"
import { progressBar } from "../functions/progress-bar"
import { thoughtsLength } from "../functions/thoughts-length"


const AppContainer = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [healthLevel, setHealthLevel] = useState(0)

  const getThoughtsLength = () => {
    axios.get('http://localhost:5000/thoughts')
    .then((response) => {
      const data = response.data;
      const length = data.length;
      const level = Math.floor(data.length / 10);
      if (length === 0) {
        var output = 0
      } else if (length % 10 === 0 && length != 0) {
        var output = 100
      } else {
      var output = (length % 10) * 10;
      };
      setProgressBarWidth(`${output}%`)
      setHealthLevel(`${level}`)
    });
  }

  const afterThoughtCreated = (data) => {
    getThoughtsLength()
  }
  
  return (
      <View style={styles.container}>
        <CreateThought style={styles.createThought} afterThoughtCreated={afterThoughtCreated}/>
        
        <View style={styles.progressBar}>
            { level(healthLevel) }
            { progressBar(progressBarWidth) }
        </View>
        <InspireMe style={styles.inspireMe} />

        <View style={styles.thoughtList}> 
            <ScrollView>
              <DisplayThoughts />
            </ScrollView>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  createThought: {
    flex: 2
  },
  fillerContent: {
    flex: 1
  },
  inspireMe: {
    flex: 1
  },
  thoughtList: {
    flex: 1
  }
})


export default AppContainer;
