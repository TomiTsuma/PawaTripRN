import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import back from '../assets/back.png'
import pricebkg from '../assets/pricebkg.png'
 

const PriceDetails = () => {
    return (
        <View style={{width:'100%',height:'100%'}}>
            <ImageBackground source={back} 
            style={{width:'100%',height:'100%'}}>
                <Text style={styles.title}>Ride Details</Text>

                <ImageBackground source={pricebkg}
                style={{width:260,height:270,alignSelf:'center',marginTop:100,alignItems:'center'}}>
                    <Text style={{alignSelf:'center',marginTop:7}}>Recommended price</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:30,marginTop:100}}>Ksh.</Text>
                        <Text style={{fontSize:70,marginTop:60}}>50</Text>
                        </View>

                </ImageBackground>

            </ImageBackground>
        </View>
    )
}

export default PriceDetails

const styles = StyleSheet.create({
    title:{
        color:'#ffffff',
        alignSelf:'center',
        marginTop:50,
        fontSize:25
      }
})
