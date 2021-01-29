import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import firebase from '../firebase'

export default class Login extends Component {
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
  
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }


    userLogin = () => {
      const email = this.emailVadidation()
      const password = this.passwordValidation()
      if (email && password) {
        firebase
        .auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
        console.log('User logged-in successfully!')
        this.setState({
            isLoading: false,
            email: '', 
            password: '',
            errorMessage: ''
        })
        this.props.navigation.navigate('Game')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }else {
        if (!email) { this.setState({emailError: true})}
        if (!password) { this.setState({passwordError: true})}
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

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }


  userLogin = () => {
    const email = this.emailVadidation()
    const password = this.passwordValidation()
    if (email && password) {
      firebase
        .auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '',
            password: '',
            errorMessage: ''
          })
          this.props.navigation.navigate('MainMenu')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    } else {
      if (!email) { this.setState({ emailError: true }) }
      if (!password) { this.setState({ passwordError: true }) }
    }
  }


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
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
            onBlur={() => this.emailVadidation()}
          />
<<<<<<< HEAD
           <Text
=======
          <Text
>>>>>>> rating-page
            style={styles.error}>
            {this.state.emailError ? 'Error with email' : ''}
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            onBlur={() => this.passwordValidation()}
            maxLength={15}
            secureTextEntry={true}
<<<<<<< HEAD
          />   
          <Text
            style={styles.error}>
            {this.state.passwordError ? 'Error with password' : ''}
          </Text>  
          <Button
            color="#ff5722"
            title="Signin"
            onPress={() => this.userLogin()}
            />   
  
          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            Don't have account? Click here to signup
          </Text>
          <Text style={styles.errorText} >
            {this.state.errorMessage}
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
    errorText:{
        fontSize:10,
        color:'red',
        alignSelf:'center',
        marginTop:10
    },
    error:{
      fontSize:10,
      color:'red',
    },
  });
=======
          />
          <Text
            style={styles.error}>
            {this.state.passwordError ? 'Error with password' : ''}
          </Text>
          <View style={styles.butt}>
            <Button
              color="#424874"
              backgroundColor='#424874'
              title="Sign In"
              onPress={() => this.userLogin()}
            />
          </View>
          <Text
            style={styles.loginText}>
            Don't have account? Click
            <Text
              style={{ color: '#a6b1e1' }}
              onPress={() => this.props.navigation.navigate('SignUp')}> here </Text>
            to signup
          </Text>
          <Text style={styles.errorText} >
            {this.state.errorMessage}
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

