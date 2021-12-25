import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from './Signup.js';
import { AppRegistry, SafeAreaView, View } from 'react-native';
import Login from './Login.js';
import App from "../App"

AppRegistry.registerComponent('App', () => App);


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
