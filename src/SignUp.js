import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';

export default class SignUp extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      
      staffId:"",
      password: "",
      confirmPassword: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Sign up Button pressed " + viewId);
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.inputs}
            placeholder="Enter Staff ID"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={staffId => this.setState({ staffId:staffId })}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/contactIcon.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password:password })}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/passwordIcon.png')}
          />
        </View>

        <View style={styles.inputContainer}>
        
          <TextInput
            style={styles.inputs}
            placeholder="Re-enter Password"
            keyboardType="email-address"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={confirmPassword => this.setState({ confirmPassword : confirmPassword})}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/passwordIcon.png')}
          />
        </View>

        <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
     <Text style={styles.signUpText}>Sign up</Text>
   </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#DFEBF3"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  

  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor: '#FF0018',
   width:250,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 signUpText:{
   color: '#FFFFFF',
   alignItems: 'center'
 }
})