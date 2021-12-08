import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from "@env"
import tw from "tailwind-react-native-classnames";
import Map from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/screens/components/Map.js';
import NavigateCard from './components/NavigateCard';
const MapScreen = () => {

  
  return (
    
    <><View style ={tw`h-1/2`}>

      <Map/>
      <GooglePlacesAutocomplete
      styles={{
        container: {
          flex: 0
        },
        textInput: {
          fontSize: 18,
          paddingEnd:160,
          marginTop: -250,
          marginLeft: 80,
          marginRight: 40,
          position:'absolute'
        }
      }}
      enablePoweredByContainer={false}
      returnKeyType={"search"}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      placeholder="Where to?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400} />


    </View >
    <SafeAreaView style ={tw`h-1/2`}>
        <NavigateCard/>

      </SafeAreaView></>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
