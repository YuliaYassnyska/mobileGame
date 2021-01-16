import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RatingCard from '../../components/RatingCard';
import { medal } from '../../components/mocks'

const RatingPage = () => {
    var firstUser = 'Tom Hardy';
    var secondUser = 'Bella Thorn';
    var thirdUser = 'Kris Even';
    return <View style={styles.container}>
        <Text style={styles.title}>Top 3 best players</Text>
        <RatingCard user={firstUser} number={1} medal={medal.gold} />
        <RatingCard user={secondUser} number={2} medal={medal.silver} />
        <RatingCard user={thirdUser} number={3} medal={medal.bronze} />
        <Button title='Go back' />
    </View>
}

export default RatingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 10
    }
});