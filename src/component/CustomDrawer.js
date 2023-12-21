import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView 
            {...props}
            contentContainerStyle={{
                backgroundColor: '#8200d6'
            }}
        >
            <ImageBackground 
                source={require('../../assets/images/menu-bg.jpg')}
                style={{padding: 20}}
            >
                <Image 
                    source={require('../../assets/images/profile.jpg')}
                    style={{
                        height:80,
                        width: 80,
                        borderRadius: 40,
                        marginBottom: 10
                    }}
                />
                <Text style={{color: "#fff", fontSize: 18}}>John Doe</Text>
                <View style={{flexDirection: "row", }}>
                    <Text style={{color: "#fff", marginRight: 5}}>280 coins</Text>
                    <FontAwesome5 name='coins' size={14} color='#fff' />
                </View>
            </ImageBackground>
            <View style={{flex:1, backgroundColor:'#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:1, borderTopColor:'#ccc'   }}>
            <TouchableOpacity onPress={()=>{}}
                style={{paddingVertical: 15  }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='share-social-outline' size={22}/>
                    <Text style={{fontSize:15,marginLeft:5}}>Tell a friend</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}
                style={{paddingVertical: 15  }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='exit-outline' size={22}/>
                    <Text style={{fontSize:15,marginLeft:5}}>Sign out</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    </View>
    
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})