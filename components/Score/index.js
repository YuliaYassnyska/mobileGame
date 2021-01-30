import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component {

    render() {
        return (
            <View style={styles.score_container}>
                <View style={styles.score}>
                    <Text style={styles.scoreNumber}>{this.props.score}</Text>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    score_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 20
    },
    score: {
        backgroundColor: '#424874',
        borderRadius: 30,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreNumber: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f4eeff'
    }
});