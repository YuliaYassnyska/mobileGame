import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RatingPage from './pages/RatingPage';
import { Game } from './pages/Game';
import LevelFirst from './levels/LevelFirst'
import LevelSecond from './levels/LevelSecond'
import LevelThird from './levels/LevelThird'
import LevelFourth from './levels/LevelFourth'
import LevelFifth from './levels/LevelFifth'
import LevelSixth from './levels/LevelSixth'
import LevelSeventh from './levels/LevelSeventh'
import LevelEight from './levels/LevelEight'
import LevelNinth from './levels/LevelNinth'
import LevelTenth from './levels/LevelTenth'
import SignUp from './components/Auth/SignUp'
import Login from './components/Auth/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/MainMenu';


// export const CountContext = React.createContext()

// const initialState = <LevelEight />;

// const reducer = (state, action) => {
//   switch (action) {
//     case '1':
//       return state === <LevelFirst />
//     case '2':
//       return state === <LevelSecond />
//     case '3':
//       return state === <LevelThird />
//     case '4':
//       return state === <LevelFourth />
//     case '5':
//       return state === <LevelFifth />
//     case '6':
//       return state === <LevelSixth />
//     case '7':
//       return state === <LevelSeventh />
//     case '8':
//       return state === <LevelEight />
//     case '9':
//       return state === <LevelNinth />
//     case '10':
//       return state === <LevelTenth />
//     default:
//       return state
//   }
// }

const App = () => {
  const Stack = createStackNavigator();
  // const [count, dispatch] = useReducer(reducer, initialState)
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LevelOne" component={LevelFirst} />
      <Stack.Screen name="LevelTwo" component={LevelSecond} />
      <Stack.Screen name="LevelThree" component={LevelThird} />
      <Stack.Screen name="LevelFour" component={LevelFourth} />
      <Stack.Screen name="LevelFive" component={LevelFifth} />
      <Stack.Screen name="LevelSix" component={LevelSixth} />
      <Stack.Screen name="LevelSeven" component={LevelSeventh} />
      <Stack.Screen name="LevelEight" component={LevelEight} />
      <Stack.Screen name="LevelNine" component={LevelNinth} />
      <Stack.Screen name="LevelTen" component={LevelTenth} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="RatingPage" component={RatingPage} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
    </Stack.Navigator>
  </NavigationContainer>
  // (<CountContext.Provider value={{ countContext: count, countDispatch: dispatch }}>
  //   {/* <View style={styles.container}> */}
  //   {/* {count} */}
  //   {/* <Game /> */}
  //   <LevelTenth />
  //   {/* </View> */}
  // </CountContext.Provider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App