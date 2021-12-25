import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,TextInput, ImageBackground } from 'react-native'
import { useState } from 'react';
import logo from '../assets/logo.png'; 
import { useNavigation } from '@react-navigation/native';


const PhoneNumberScreen = () => {
    const [phone, setPhone] = useState('');
    const setPhoneNumber = () =>{
        
    }
    const navigation = useNavigation();

  useEffect(() => {
    
        navigation.replace("Mode")
      
    })

   
    return (
        <SafeAreaView style={styles.container}>
            <Image
            source={{logo}}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
            <Text>Enter your Phone Number</Text>

            <View style={styles.inputView}>
                
                    
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone Number."
                    placeholderTextColor="#003f5c"
                    onChangeText={(phone) => setPhone(phone)}/>
            </View>
            <Button
                    title="Continue"
                    ></Button>
        </SafeAreaView>
    )
}

export default PhoneNumberScreen

const styles = StyleSheet.create({

    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      inputView: {
          flexDirection: "row",
          backgroundColor: "#f0f1f5",
          borderRadius: 20,
          width: "80%",
          height: 45,
          margin: 50,
          marginLeft:80,
          marginRight:80,
          alignItems: "center",
          justifyContent:'center',
        }

})
