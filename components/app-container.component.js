import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import axios from "axios";

import CreateThought from "./create-thought.component";
import InspireMe from "./inspire-me.component";
import DisplayThoughts from "./display-thoughts.component";
import { level } from "../functions/level"
import { progressBar } from "../functions/progress-bar"


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
      <View>
        <CreateThought afterThoughtCreated={afterThoughtCreated}/>
        { level(healthLevel) }
        { progressBar(progressBarWidth) }
        <InspireMe />

        <View style={{ height: 400}}> 
            <ScrollView>
              <DisplayThoughts />
            </ScrollView>
        </View>

      </View>
  )
}

export default AppContainer;
