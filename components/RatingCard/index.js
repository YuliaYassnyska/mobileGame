import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const RatingCard = (props) => {
    const { user, number, medal } = props
    return <View style={styles.wrapper}>
        <View style={styles.contain}>
            <Text style={styles.num}>{number}.</Text>
            <Text style={styles.text}>{user}</Text>
        </View>
        <Image source={medal} style={styles.image} />
    </View>
}

export default RatingCard

const styles = StyleSheet.create({
    wrapper: {
        width: 400,
        height: 70,
        backgroundColor: '#f8f1f1',
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16
    },
    num: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 16
    },
    image: {
        width: 40,
        height: 40,
        backgroundColor: '#f8f1f1',
        marginRight: 16
    },
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
