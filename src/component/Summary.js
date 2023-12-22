import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Summary = ({location}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <View style={[styles.alignCenter, {paddingVertical: 20}]}>
        <View >
          <Text style={[styles.text]}>Start</Text>
          <View style={styles.timeWrap}>
            <Text style={{fontSize: 16, textAlign : 'center'}}>17th May 2023</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text]}>Finish</Text>
          <View style={styles.timeWrap}>
            <Text style={{fontSize: 16, textAlign : 'center'}}>20th May 2023</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.text]}>Pick-up Station</Text>
      <View style={[styles.locationWrap, styles.alignCenter ,{marginVertical: 10}]}>
        <Ionicons name='location-sharp' color={'#005E54'} size={30} />
        <Text style={{fontSize: 16, textAlign : 'center', color: '#005E54'}}>{location ? location : null}</Text>
        <Text style={{fontSize: 16, textAlign : 'center', color: '#005E54'}}>20km</Text>
      </View>

      <Text style={[styles.text, {marginTop: 10}]}>Payment Options</Text>
      <View style={[styles.alignCenter, {justifyContent:'flex-start',marginVertical: 10, }]}>
        <Image 
        source={require('../../assets/images/gcash.png')} 
        resizeMode="contain"
        style={{height: 40, width: 40}} 
        />
        <Text style={[styles.text, {marginLeft: 20}]}>University of Ghana, Legon</Text>
      </View>
    </View>
  )
}

export default Summary

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#005E54',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  text:{
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  timeWrap: {
    backgroundColor: '#fff',
    padding: 10,
    width: deviceWidth/3,
    borderRadius: 10,
    paddingVertical: 15,
  },
  locationWrap: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  alignCenter:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },


})