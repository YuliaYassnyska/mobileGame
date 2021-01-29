import React, { Component } from 'react';
import { Button, View, StyleSheet } from "react-native";
import MarginView from '../Common/MarginView';

export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.butt}>
            <Button
              color="#424874"
              backgroundColor='#424874'
              title="Game"
              onPress={() => this.props.navigation.navigate('Game')}
            />
          </View>
          <MarginView margin={15} />
          <View style={styles.butt}>
            <Button
              color="#424874"
              backgroundColor='#424874'
              title="Rating"
              onPress={() => this.props.navigation.navigate('RatingPage')}
            />
          </View>
          <MarginView margin={15} />
          <View style={styles.butt}>
            <Button
              color="#424874"
              backgroundColor='#424874'
              title="Exit"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        </View>
      </View>
    )
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
    padding: 30,
    minWidth: 200
  }
});