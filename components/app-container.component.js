import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import CreateThought from "./create-thought.component";
import InspireMe from "./inspire-me.component";
import DisplayThoughts from "./display-thoughts.component";
import Header from "./header.component"
import { level } from "../functions/level"
import { progressBar } from "../functions/progress-bar"
import { thoughtsLength } from "../functions/thoughts-length"

const AppContainer = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [healthLevel, setGratitudeLevel] = useState(0)

  const setProgressBar = async () => {
      const { level, intMarker } = await thoughtsLength();

      setProgressBarWidth(`${intMarker}%`)
      setGratitudeLevel(`${level}`)
  }
  
  const afterThoughtCreated = () => {
    setProgressBar()
  }

  return (
      <View style={styles.container}>
        <Header style={styles.header} />
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
  header: {
    flex: 1
  },
  createThought: {
    flex: 1
  },
  progressBar: {
    flex: 0.5
  },
  inspireMe: {
    flex: 1
  },
  thoughtList: {
    flex: 2
  }
})


export default AppContainer;
