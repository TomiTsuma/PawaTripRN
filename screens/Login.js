import React from 'react'
import { Button,ImageBackground,StyleSheet, Text,Image,View,TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import logo from '../assets/logo.png'; 
// import 'react-native-gesture-handler';
import { auth } from '../firebase'
// import { GoogleSignin } from 'react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '222655618418-56opdtgrudrssbflgolm41t3dgffki5t.apps.googleusercontent.com',
// }); 
const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onGoogleButtonPress = () => {
  //     // Get the users ID token
  // const { idToken } =  GoogleSignin.signIn();

  // // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
      
    }

    const handleLogin = () => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={styles.container}>
   
<View style={styles.inputView2}>
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
<Button
  title="Login"
  onPress={handleLogin}></Button>
<Text
  style={{marginTop:20}}>
      OR
  </Text>

  <View style={styles.loginbuttons}>
  <TouchableOpacity>
  <Image source = {{uri: "https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"}}
             style={{width: 40, height: 40,margin:20}}
             onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}/>
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
        </SafeAreaView>
    )
}


export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
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
        marginTop:-510,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        width:300,
        flex: 1,
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
 }
  });
