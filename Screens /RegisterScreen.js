
import React, { useState } from 'react';
import{View, Image, Text, ImageBackground, TouchableOpacity, Button, StyleSheet, TextInput, Alert}from"react-native"
import { fetchDataBasedOnRole, fetchUserData, signIn,fetchAllData } from '../back-end/Http';



function RegisterScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn=async()=>{
        try {
            const signInWithPassword = await signIn(email, password);
            if (signInWithPassword) {
                // Fetch all student and driver data
                const allUsersData = await fetchAllData();

                // Pass this data to the main screen
                navigation.navigate('main', { students: allUsersData.students, drivers: allUsersData.drivers });
            } else {
                Alert.alert("Login Failed", "Email or password is wrong");
            }
        } catch (error) {
            console.error('sign-in error:', error);
            Alert.alert("Login error", "Please try again later");
        }
    };
    const handleRegister= ()=>{

        navigation.navigate('RegisterForm')

    }
    return (
    <View style={styles.container} >
        <View style={styles.mainContainer} >
        <View style={styles.textStyle}>
        
        <View style={styles.imageContainer}>
        <Image
        source={require('../assets/logo.jpg')} 
        style={styles.image}
        />
        </View>

        <Text style={styles.subtitleText}>
            The best app to find your next carpool buddy!
        </Text>
        </View>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.TextInput} placeholder="CSUN Email" value={email} onChangeText={(text)=>setEmail(text)}
             placeholderTextColor="darkgrey"/>

        </View>
        <View style={styles.inputContainer}>
            <TextInput  style={styles.TextInput} placeholder="Password" value={password} onChangeText={(text)=>setPassword(text)}
             placeholderTextColor="darkgrey" secureTextEntry={true} />
        </View>
        
        
        <View style={styles.buttonscontainer}>
       <TouchableOpacity
        style={styles.customButton}
        onPress={handleSignIn}
        >
        <Text style={styles.buttonText} >Log In</Text>
      </TouchableOpacity>
        </View>
        <Text style={styles.additionalText}>Don't have an account?</Text>
        <TouchableOpacity
        style={styles.customButton2}
        onPress={handleRegister}
        >
        <Text style={styles.buttonText2} >Register</Text>
      </TouchableOpacity>
      <View style={styles.image2}>
     <Image
     source={require('../assets/CSUNlogo.jpg')} 
     style={styles.image2}
     />
     </View>
        </View>
     
   
    );
}

export default RegisterScreen;
const styles=StyleSheet.create({
    container:{
      backgroundColor:'white',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:50,
      
    },
    
    dummyText:{
        textDecorationStyle: 'none',
        color: 'red',
         },

        imageContainer: {
            width: 250,     
            height: 250, 
            paddingLeft: 50, 
         },

        image: {
            flex: 1,        
            width: undefined,
            height: undefined,
        },
    
        
    customButton: {
          backgroundColor: 'black', 
          padding: 10, 
          borderRadius: 10,
          marginTop: 'none',
        },
        
    buttonText:{
        
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },

    buttonText2:{
        
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
    },

    buttonscontainer: {
        marginTop: 50,
        padding: 10,
        width: '90%',
        borderRadius: 55,
    },

    inputContainer:{
        alignItems: 'center',
        width:'100%',
        padding:5,
       
    },
    TextInput:{
     
     borderRadius: 10,
     padding:15,
     marginVertical:10,
     width:'100%',
     backgroundColor: '#ECECEC',
    },
    titleText:{
        fontStyle:'italic',
        fontSize:60,
        color: 'red',
        textAlign: 'center'
    },
    subtitleText:{
        color:'black',
        textAlign: 'center'
        


    },

    image2:{
        height: 85,
        width: 85,
        marginTop: 30,
    },

    
}
)    