import React, { Component, useState } from 'react';
import { FlatList, Text, Button, TextInput, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import axios from "axios";

import styles from './design.component.style';

import CreateThought from "./create-thought.component";
import InspireMe   from "./inspire-me.component";
import ProgressBar from "./progress-bar.component";
import DisplayThoughts from "./display-thoughts.component";
import { level } from "../functions/level"


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
    // We choose to do nothing with the data argument
    // But I'm leaving it as a reminder that we *can*
    getThoughtsLength()
  }
  
  return (
      <View>

        <CreateThought afterThoughtCreated={afterThoughtCreated}/>
        {level(healthLevel)}
        <ProgressBar progressBarWidth={progressBarWidth}/>
        <InspireMe />

        <View style={{ height: 400}}> 
        {/* Can only have one component in scroll (i.e. display thoughts) */}
            <ScrollView>
              <DisplayThoughts />
            </ScrollView>
        </View>

      </View>
  )
}

export default AppContainer;
