import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/Login';
import Index from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/index.js'
import { store } from './store';
import RootNavigator from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/navigation/RootNavigator.js';
import IdScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/IdScreen.js';
import PhoneNumberScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/PhoneNumberScreen';
import ModeScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/ModeScreen';
import MapScreen from './screens/MapScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';

import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/components/RideOptionsCard.js';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
    <Stack.Navigator>
    {/* <Stack.Screen
        name = 'Login'
        component = {Login}
        options = {{
          headerShown: true
        }}
      />
    <Stack.Screen
        name = 'Signup'
        component = {Signup}
        options = {{
          headerShown: true
        }}
      /> */}
    <Stack.Screen
        name = 'index'
        component = {Index}
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
