import React, { Component } from 'react'
import { Text,StyleSheet,  View, ActivityIndicator } from 'react-native'
import firebase from '../firebase'

import {
  TextInput,
  Button,
  Snackbar,
  Portal,
  Dialog,
  Paragraph,
  Provider as PaperProvider
} from "react-native-paper";


export default class SignUp extends Component {
  
    state = { 
      name: '',
      email: '', 
      password: '',
      phone: '', 
      isLoading: false, 
      nameError: false,
      emailError: false,
      passwordError: false,
      phoneError: false 
    }

    updateInputValue = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    signup = () => {
      const name = this.nameValidation()
      const phone = this.phoneValidation()
      const email = this.emailVadidation()
      const password = this.passwordValidation()
      if (name && phone && email && password) {
        firebase.auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.name,
            phone: this.state.phone
          })
          console.log('User registered successfully!');
          this.setState({
            isLoading: false,
            displayName: '',
            email: '', 
            password: '',
          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))      
    } else {
      if (!email) { this.setState({emailError: true})}
      if (!password) { this.setState({passwordError: true})}
      if (!name) { this.setState({nameError: true})}
      if (!phone) { this.setState({phoneError: true})}
    }
  }
      
    nameValidation = () => {
      if (this.state.name === '') {
        this.setState({nameError: true})
        return false
      } else {
        this.setState({nameError: false})
        return true
      }
    }


  phoneValidation = () => {
    if (this.state.phone === '') {
      this.setState({phoneError: true})
      return false 
    } 
    let reg = /^[0-9\b]+$/
    if (reg.test(this.state.phone) === false) {
      this.setState({phoneError: true})
      return false
    } else {
      this.setState({phoneError: false})
      return true
    }
  }

    emailVadidation = () => {
      if (this.state.email === '') {
        this.setState({emailError: true})
        return false 
      } 
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        this.setState({emailError: true})
        return false
      } else {
        this.setState({emailError: false})
        return true
        } 
    } 
    
    passwordValidation = () => {
      if (this.state.password.length < 8) {
        this.setState({passwordError: true})
        return false 
      } else {
        this.setState({passwordError: false})
        return true
      }
    }

    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
      return (
        <View style={styles.container}>  
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputValue(val, 'name')}
            onBlur={() => this.nameValidation()}
          />
          <Text
            style={styles.error}>
            {this.state.nameError ? 'Error with name' : ''}
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Phone"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputValue(val, 'phone')}
            onBlur={() => this.phoneValidation()}
          />
          <Text
            style={styles.error}>
            {this.state.phoneError ? 'Error with phone' : ''}
          </Text>       
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputValue(val, 'email')}
            onBlur={() => this.emailVadidation()}
          />
          <Text
            style={styles.error}>
            {this.state.emailError ? 'Error with email' : ''}
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputValue(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
            //onBlur={() => this.passwordValidation()}
          />
          <Text
            style={styles.error}>
            {this.state.passwordError ? 'Error with password' : ''}
          </Text>   
          <Button
            color="#621FF7"
            mode='contained'
            onPress={() => this.signup()}
            >Sign up</Button> 
  
          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Login')}>
            Already Registered? Click here to login
          </Text>                           
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 20,
      backgroundColor: '#fff'
    },
    inputStyle: {
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1,
      width: '100%',
      height: '5%'
    },
    loginText: {
      color: '#333333',
      marginTop: 25,
      textAlign: 'center'
    },

    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    error:{
        fontSize:10,
        color:'red',
        marginBottom: 1
    },

  });

