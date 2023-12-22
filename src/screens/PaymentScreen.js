import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../component/BackButton'

import {specifications} from '../data/index'
import CarSpecificationSingle from '../component/CarSpecificationSingle'
import Summary from '../component/Summary'
import MapTest from '../component/MapTest'
import Maps from '../component/Maps'

const PaymentScreen = ({navigation, route}) => {
  const [locationNameFromMap, setLocationNameFromMap] = useState(null);

  const handleLocationNameChange = (newLocationName) => {
    console.log(locationNameFromMap)
    setLocationNameFromMap(newLocationName);
  };

  

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#005B52'}}>
      <ScrollView>
        
      <View style={{height: 250, flex: 1}}>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeLocation')}>
          <Maps onLocationNameChange={handleLocationNameChange}/>
        </TouchableOpacity>
        <View style={styles.backBtnWrap}>
          <BackButton onPress={()=>navigation.goBack()} />
        </View>
      </View>

      <View style={[styles.borderStyles ,{backgroundColor: '#E6EFEE', flex: 1}]}>

        <View style={[styles.alignCenterRow, {paddingHorizontal: 20, paddingBottom: 10}]}>
          <Text style={styles.title}>Mercedes Benz 2022 CLS Coupe</Text>
          <CarSpecificationSingle data={specifications[0]} />
        </View>

        {locationNameFromMap ? (
          <Summary location={locationNameFromMap} />
        ): (
          <Summary location={""} />
        )}

      </View>
      
      </ScrollView>

      <View style={{padding: 10}}>
        <TouchableOpacity style={[styles.bookNowBtn]} onPress={()=>{}}>
          <Text style={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              fontSize: 16
          }}>
              Pay Now
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView> 
  )
}

export default PaymentScreen

const radius = 40
const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  backBtnWrap:{
    backgroundColor: "#fff",
    position: 'absolute',
    padding: 10,
    top: 50,
    left: 20,
    borderRadius:25,
    borderColor: '#000'
  },
  alignCenter:{
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center'
  },
  alignCenterRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1, // Adjusted flex property
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: deviceWidth/2
  },
  horizontalRule: {
    borderBottomColor: '#B4BBBA',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  borderStyles: {
    paddingTop: 40,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    flex: 1, // Adjusted flex property
  },
  bookNowBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEAD07',
    paddingVertical: 10,
    borderRadius: 10,
    width : deviceWidth- 20,
  },

})