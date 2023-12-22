import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Maps({ onLocationNameChange }) {
  // const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Location permission not granted');
          return;
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        // const latitude = location.coords.latitude
        // const longitude = location.coords.longitude
        const latitude = 8 + 10/60 + 57.6/3600
        const longitude = 126 + 21/60 + 8.5/3600


        const apiKEY = "AIzaSyCGVKppuhBHf38d0Es7yZcR68ZG9m5SZ5s"
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' 
        + latitude +',' + longitude + '&key=' + apiKEY)
          .then((response) => response.json())
          .then((responseJson) => {
            // setLocationName(responseJson.results[3].formatted_address)
            onLocationNameChange(responseJson.results[3].formatted_address)
              // console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
        })

      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchUserLocation();


  }, []);

  return (
    <View style={styles.container}>
      <MapView
        
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        // showsMyLocationButton={true}
        region={{
          latitude: 8 + 10/60 + 57.6/3600,
          longitude: 126 + 21/60 + 8.5/3600,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        style={styles.map}
      />
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const deviceHeight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  map: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
