import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export const Game = ({ navigation }) => {

    return <View>
        <Button onPress={() => navigation.navigate('LevelOne')} title='Level 1' />
        <Button onPress={() => navigation.navigate('LevelTwo')} title='Level 2' />
        <Button onPress={() => navigation.navigate('LevelThree')} title='Level 3' />
        <Button onPress={() => navigation.navigate('LevelFour')} title='Level 4' />
        <Button onPress={() => navigation.navigate('LevelFive')} title='Level 5' />
        <Button onPress={() => navigation.navigate('LevelSix')} title='Level 6' />
        <Button onPress={() => navigation.navigate('LevelSeven')} title='Level 7' />
        <Button onPress={() => navigation.navigate('LevelEight')} title='Level 8' />
        <Button onPress={() => navigation.navigate('LevelNine')} title='Level 9' />
        <Button onPress={() => navigation.navigate('LevelTen')} title='Level 10' />
    </View>
}

const styles = StyleSheet.create({
});
