import React,  { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
// import Marker  from 'react-native-maps';

function GoogleMap(){

  const [region] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    latitudeDelta: 0.722,
    longitudeDelta: 0.0421,
  })

  // const [yogaSpots] = useState([
  //   {index: 1,
  //   marker={marker.latlng},
  //   title={marker.title},
  //   description={marker.description}
  // }
  // ])
  

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={region} >
          <Marker title="Rose School of Transformational Yoga"
          description="North London Preferred Partner"
          coordinate={{ latitude: 51.653129, longitude: -0.201570 }}></Marker>
          <Marker title="Evolution Yoga Retreats"
          description="Enquire for 10% off"
          coordinate={{ latitude: 51.533029, longitude: 0.042953 }}></Marker>
          <Marker title="Our retreat"
          description="In House yoga and reflection"
          coordinate={{ latitude: 51.522042, longitude: -0.081769 }}></Marker>
          <Marker title="Yoga and Meditation retreats"
          description="South London Preferred Partner"
          coordinate={{ latitude: 51.511523, longitude: -0.323309 }}></Marker>
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default GoogleMap;