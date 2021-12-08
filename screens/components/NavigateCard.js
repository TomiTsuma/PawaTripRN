import React from 'react'
import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import curr_loc from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/curr_loc.png'
import dest from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/dest.png'
import transition from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/transition.png'

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`flex-1`}>
            <View style={styles.container1}>
            <View style={styles.container2}>
            <Image source = {curr_loc}
                   style={{width: 40, height: 40,marginTop:20, marginStart:20}}/>  
            <Image source = {transition}
                   style={{width: 5, height: 80,marginStart:37}}/>   
            <Image source = {dest}
                   style={{width: 40, height: 55,marginStart:20}}/>     
            </View>
            <View style={styles.container3}>
            <Text style={tw` text-sm mt-3` }>Pick up</Text>
            <TouchableOpacity>
            <Text style={tw` text-xl mb-10` }>Current Location</Text>
            </TouchableOpacity>
            
            <Text style={tw` text-sm mt-10` }>Drop off</Text>
            <TouchableOpacity>
            <Text style={tw` text-xl ` }>Destination</Text>
            </TouchableOpacity>

            </View>
            </View>
           
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        flexDirection :"row"
        
    },
    container2:{
        flex: 0,
        flexDirection :"column"
        
    },
    container2:{
        flex: 0,
        flexDirection :"column",
        marginStart:20,
        
    }
})
