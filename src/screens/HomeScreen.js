import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

import SearchBar from '../component/SearchBar'
import CarCard from '../component/CarCard'
import CarLogoCard from '../component/CarLogoCard'
import {cars , carLogo } from '../data/index'

const HomeScreen = ({navigation, route}) => {
  return (
    // <SafeAreaView style={{flex:1, backgroundColor: '#E6EFEE', marginTop: 20}}>
    <SafeAreaView style={{ flex:1, backgroundColor: '#E6EFEE'}}>
      <View style={{
          paddingVertical: 20, 
          paddingHorizontal: 20,
          backgroundColor: '#005E54',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingBottom: 40,
          paddingTop: 40
        }}>
        <View style={{
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems: 'center'
          // marginBottom: 10,
        }}>
          <Text style={{fontSize: 18, color: '#fff'}} >Hello John Doe</Text>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <ImageBackground 
              source={require('../../assets/images/profile.jpg')}
              style={{width: 40, height: 40}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: 300}}><Text style={{fontSize:30, color: '#fff', fontFamily: 'Poppins-Light',}}>Find your favorite vehicle</Text></View>
        <View style={{
          position: 'absolute',
          bottom: -20,
          left: 15
        }}>
          <SearchBar />
        </View>
      </View>

      <View style={styles.topSectionWrap}>
        <View style={styles.allWrap}>
          <Text style={styles.allCarsText}>Top Brands</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        <FlatList
            data={carLogo}
            renderItem={({item})=>(
              <CarLogoCard 
                item={item}
              />
            )}
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false} // Set this prop to hide the scroll bar
            horizontal
        />
      </View>

      <View style={styles.bottomSectionWrap}>
        <View style={styles.allWrap}>
          <Text style={styles.allCarsText}>Available Near You</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        <FlatList
            data={cars}
            renderItem={({item})=>(
              <CarCard 
                item={item}
                onPress={()=> navigation.navigate('SpecsScreen', {car: item})}
              />
            )}
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false} // Set this prop to hide the scroll bar
            horizontal
        />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  topSectionWrap: {
    paddingTop: 40,
  },
  bottomSectionWrap:{
    paddingTop: 10,
  },
  allWrap:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  allCarsText:{
    color: "#000",
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  seeAllText:{
    color: "#005E54",
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },

})