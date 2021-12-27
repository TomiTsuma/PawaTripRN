import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/Login';
import Index from './screens/index.js'
import { store } from './store';
import RootNavigator from './screens/navigation/RootNavigator.js';
import IdScreen from './screens/IdScreen.js';
import PhoneNumberScreen from './screens/PhoneNumberScreen';
import ModeScreen from './screens/ModeScreen';
import MapScreen from './screens/MapScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import RideDetails from './screens/RideDetails'
import PriceDetails from './screens/PriceDetails'
import CarpoolerCard  from './screens/components/CarpoolerCard';

import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from './screens/components/RideOptionsCard.js';
import BookingDetails from './screens/BookingDetails';



export default function App() {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen
        name = 'PhoneNumberScreen'
        component = {PhoneNumberScreen}
        options = {{
          headerShown: false
        }}
      />


      <Stack.Screen
        name = 'IdScreen'
        component = {IdScreen}
        options = {{
          headerShown: false
        }}
      />
    
      <Stack.Screen
        name = 'index'
        component = {Index}
        options = {{
          headerShown: false
        }}
      />
      
      
    
      <Stack.Screen
        name = 'MapScreen'
        component = {MapScreen}
        options = {{
          headerShown: false
        }}
      />
      
      <Stack.Screen
        name = 'RideOptionsCard'
        component = {RideOptionsCard}
        options = {{
          headerShown: false
        }}
      />
    </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height:'100%',
    margin: 40,

  },
});
