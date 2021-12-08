import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import bookride from "C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/bookride.png"
import offerride from "C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/offerride.png"
import logo from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/logo.png'; 


const ModeScreen = () => {
    return (
        <SafeAreaView>
            <Image
            source={{logo}}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
            <Text style={{alignSelf:"center", justifyContent:"center",marginTop:300}}>Let's take a trip</Text>
            <Text style={{alignSelf:"center"}}>Request/ Offer a ride and share your trip with a nearby community member</Text>

            <TouchableOpacity> 
                <Image source = {{bookride}}
                             style={{width: 100, height: 80,margin:20}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity> 
                <Image source = {{offerride}}
                             style={{width: 100, height: 80,margin:20}}>
                </Image>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ModeScreen

const styles = StyleSheet.create({
    button:{
       
    }
})
