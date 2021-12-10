import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/Signup.js';
import { SafeAreaView, View } from 'react-native';
import Login from './Login.js';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView >
       <View style={{width:"100%",height:"100%", marginTop:250}}>
    <Tab.Navigator >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Sign up" component={Signup}  />
    </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

export default TabNavigator;
