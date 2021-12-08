import React from 'react'
import { ImageBackground,StyleSheet, Text,Image,View,TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import logo from 'C:/Users/TSu/Documents/PawaTrip1/pawatrip-1/assets/logo.png'; 
import 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { GoogleSigninButton } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';





const HomeScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView >
   <View  style={styles.container}>
     <ImageBackground source = {{logo}}
             style={{width: '100%', height: '100%',margin:20}}>
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<Button style={styles.lgn}
        title="Login"
        onPress={() => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          //auth.signInWithEmailAndPassword(email, password)
         
        }}></Button>
<Text>
      OR
  </Text>

  <View style={styles.loginbuttons}>
  <TouchableOpacity
    onPress={() => {
         }}>
  <Image source = {{uri: "https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"}}
             style={{width: 40, height: 40,margin:20}}
             />
             </TouchableOpacity>
             <TouchableOpacity>
   <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetN3GYmYgghuFoDrgJa_A7z_ZHvrsF1ZXHw&usqp=CAU"}}
             style={{width: 40, height: 40,margin:20}}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source = {{uri: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"}}
             style={{width: 40, height: 40,margin:20}}/>
</TouchableOpacity>
  
    
</View>






<TouchableOpacity style={{marginTop:50}}> 
  <Text style={styles.forgot_button}>Forgot Password?</Text>
</TouchableOpacity>
</ImageBackground>
</View>
        </SafeAreaView>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
      width: '90%',
      height:'90%',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      margin:10,
      
    },
    inputView: {
        backgroundColor: "#f0f1f5",
        borderRadius: 20,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      inputView2: {
        backgroundColor: "#f0f1f5",
        borderRadius: 20,
        width: "80%",
        height: 45,
        marginBottom: 20,
        marginTop:0,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        width:300,
        padding: 10,
        marginLeft: 20,
      },
      
      forgot_button: {
        height: 30,
        marginBottom: 1,
      },
      loginbuttons: {
          flexDirection:"row",
        height: 30,
        margin: 10,

      },
      loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   backgroundColor:"#FF1493",
 },
  lgn:
  {
    fontFamily: "Helvetica",
    fontSize: 20,
    backgroundColor: "royalblue",
    color: "#000",
    padding: 0.7,
    paddingLeft: 0.9,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    
  }

  });
