import React from 'react'
import { Image, SafeAreaView,StyleSheet, Text,TextInput, View } from 'react-native'
import { useState } from 'react';
import logo from '../assets/logo.png'; 
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { database } from '../firebase';
import { auth } from '../firebase';

const IdScreen = () => {
    const [id, setID] = useState('');
    const user = auth.currentUser;
    const setIDNumber = () =>{
        database()
        .ref(('/users/').concat(user))
        .set({
            IDNumber: id,
          })
          .then(() => console.log('Data set.'));


          const navigation = useNavigation()

          React.useEffect(() => {
           
                navigation.replace("Home")
              
            })
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Image
            source={logo}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
            <Text>Enter your ID number</Text>

            <View style={styles.inputView}>
                <Image source={{url:"https://img.favpng.com/0/21/17/computer-icons-encapsulated-postscript-png-favpng-zk6XjnBWuuvr8qsyftmhqM2xL.jpg"}}
                 style={{width: 10, height: 10,margin:20}}>
                    </Image>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Identification Number."
                    placeholderTextColor="#003f5c"
                    onChangeText={(id) => setID(id)}/>
                
            </View>
            <Button
                    title="Continue"
                    onPress ={setIDNumber}></Button>
        </SafeAreaView>
    )
}

export default IdScreen

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
