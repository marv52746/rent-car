import 'react-native-gesture-handler';
import { useEffect } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';


export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Light" : require('./assets/fonts/Poppins-Light.ttf'),
    "Poppins-Regular" : require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold" : require('./assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  },[])


  if(!fontsLoaded) {
    return undefined
  }else{
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer >
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}
