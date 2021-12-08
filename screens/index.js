import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/HomeScreen.js';
import Signup from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/Signup.js';
import { SafeAreaView, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView >
       <View>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={HomeScreen} />
      <Tab.Screen name="Sign up" component={Signup}  />
    </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

export default TabNavigator;
