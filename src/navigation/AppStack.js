import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../component/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons'
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    // </Stack.Navigator>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        // drawerContent={(props) => <DrawerContent {...props}/>}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle:{ marginLeft: -25, fontSize:15 },
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333'
          // drawerPosition: 'right',
        }}
      >
        <Drawer.Screen name="Home" component={TabNavigator} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='home-outline' size={22} color={color} />
          )}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='person-outline' size={22} color={color} />
          )}} />
        <Drawer.Screen name="Message" component={MessageScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
          )}} />
        <Drawer.Screen name="Moments" component={MomentsScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='timer-outline' size={22} color={color} />
          )}} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='settings-outline' size={22} color={color} />
          )}} />
      </Drawer.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})