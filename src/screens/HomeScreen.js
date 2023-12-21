import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff', marginTop: 20}}>
      <ScrollView style={{padding: 20}}>
        <View style={{
          flexDirection:'row',
          justifyContent: 'space-between',
          marginBottom: 20
        }}>
          <Text style={{fontSize: 18}} >Hello John Doe</Text>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <ImageBackground 
              source={require('../../assets/images/profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <TouchableOpacity 
            style={{backgroundColor: 'blue', padding: 20, borderRadius: 10}}
            onPress={()=> navigation.navigate('GameDetails', {title: "test"})}
          >
            <Text style={{color: '#fff', fontWeight: 800}}>PLAY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})