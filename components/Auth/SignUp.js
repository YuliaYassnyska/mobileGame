import React, { Component } from 'react'
<<<<<<< HEAD
import { Text,StyleSheet,  View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
=======
import { Text, StyleSheet, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
>>>>>>> rating-page
import firebase from '../firebase'



export default class SignUp extends Component {
<<<<<<< HEAD
  
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
        firebase
=======

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
      firebase
>>>>>>> rating-page
        .auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.name,
            phone: this.state.phone
          })
          console.log('User registered successfully!');
          this.setState({
            isLoading: false,
            displayName: '',
<<<<<<< HEAD
            email: '', 
=======
            email: '',
>>>>>>> rating-page
            password: '',
          })
          this.props.navigation.navigate('Login')
        })
<<<<<<< HEAD
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
=======
        .catch(error => this.setState({ errorMessage: error.message }))
    } else {
      if (!email) { this.setState({ emailError: true }) }
      if (!password) { this.setState({ passwordError: true }) }
      if (!name) { this.setState({ nameError: true }) }
      if (!phone) { this.setState({ phoneError: true }) }
    }
  }

  nameValidation = () => {
    if (this.state.name === '') {
      this.setState({ nameError: true })
      return false
    } else {
      this.setState({ nameError: false })
      return true
    }
  }
>>>>>>> rating-page


  phoneValidation = () => {
    if (this.state.phone === '') {
<<<<<<< HEAD
      this.setState({phoneError: true})
      return false 
    } 
    let reg = /^[0-9\b]+$/
    if (reg.test(this.state.phone) === false) {
      this.setState({phoneError: true})
      return false
    } else {
      this.setState({phoneError: false})
=======
      this.setState({ phoneError: true })
      return false
    }
    let reg = /^[0-9\b]+$/
    if (reg.test(this.state.phone) === false) {
      this.setState({ phoneError: true })
      return false
    } else {
      this.setState({ phoneError: false })
>>>>>>> rating-page
      return true
    }
  }

<<<<<<< HEAD
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
=======
  emailVadidation = () => {
    if (this.state.email === '') {
      this.setState({ emailError: true })
      return false
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      this.setState({ emailError: true })
      return false
    } else {
      this.setState({ emailError: false })
      return true
    }
  }

  passwordValidation = () => {
    if (this.state.password.length < 8) {
      this.setState({ passwordError: true })
      return false
    } else {
      this.setState({ passwordError: false })
      return true
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.form}>
>>>>>>> rating-page
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
<<<<<<< HEAD
          </Text>       
=======
          </Text>
>>>>>>> rating-page
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
<<<<<<< HEAD
            //onBlur={() => this.passwordValidation()}
=======
          //onBlur={() => this.passwordValidation()}
>>>>>>> rating-page
          />
          <Text
            style={styles.error}>
            {this.state.passwordError ? 'Error with password' : ''}
<<<<<<< HEAD
          </Text>   
          <Button
            color="#ff5722"
            title="SignUp"
            onPress={() => this.signup()}
          />
  
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
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
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
=======
          </Text>
          <View style={styles.butt}>
            <Button
              color="#424874"
              backgroundColor='#424874'
              title="Sign Up"
              onPress={() => this.signup()}
            />
          </View>
          <Text
            style={styles.loginText}>
            Already Registered? Click
              <Text
              style={{ color: '#a6b1e1' }}
              onPress={() => this.props.navigation.navigate('Login')}> here </Text>
              to login
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6b1e1'
  },
  butt: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#424874'
  },
  form: {
    backgroundColor: '#dcd6f7',
    padding: 30
  },
  inputStyle: {
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f4eeff'
  },
  loginText: {
    width: 200,
    height: 70,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#424874'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
    marginTop: 10
  },
  error: {
    fontSize: 10,
    color: 'red',
  },

});
>>>>>>> rating-page

