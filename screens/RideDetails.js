import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, ImageBackgroundBase, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import Index from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/index.js'
import { store } from './store';
import RootNavigator from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/navigation/RootNavigator.js';
import IdScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/IdScreen.js';
import PhoneNumberScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/PhoneNumberScreen';
import ModeScreen from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/ModeScreen';
import MapScreen from './screens/MapScreen';

import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RideOptionsCard from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/components/RideOptionsCard.js';
import logo from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/logo.png'; 
import NavigateCard from './components/NavigateCard';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <SafeAreaView>
        <Image
            source={{logo}}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
        <View style = {{width: "100%", height: "100%",marginTop:60,marginBottom:10,flexDirection:"column"}}>
        <NavigateCard></NavigateCard>
        <View style = {{width: "100%", height: 30,marginTop:20,marginBottom:10,marginLeft:20,marginRight:20,flex:1,flexDirection:"row"}}>
            <View style = {{flex:1,flexDirection:"column"}}>
                <Text>Departure Time</Text>
                <ImageBackground>
                    <TextInput></TextInput>
                </ImageBackground>
            </View>
            <View style = {{flex:1,flexDirection:"column"}}>
                <Text>Departure Date</Text>
                <ImageBackground>
                    <TextInput></TextInput>
                </ImageBackground>
            </View>
        </View>
        <Text>Number of passengers</Text>
                <ImageBackground>
                    <Image/>
                    <TextInput></TextInput>
                    <Image/>
                </ImageBackground>
        </View>
    </SafeAreaView>
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
