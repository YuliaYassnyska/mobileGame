import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RatingCard from '../../components/RatingCard';
import { medal } from '../../components/mocks'

const RatingPage = () => {
    var firstUser = 'Tom Hardy';
    var secondUser = 'Bella Thorn';
    var thirdUser = 'Kris Even';
    return <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.title}>Top 3 best players</Text>
            <RatingCard user={firstUser} number={1} medal={medal.gold} />
            <RatingCard user={secondUser} number={2} medal={medal.silver} />
            <RatingCard user={thirdUser} number={3} medal={medal.bronze} />
            <View style={styles.butt}>
                <Button
                    color="#424874"
                    backgroundColor='#424874'
                    title='Go back'
                    onPress={() => this.props.navigation.navigate('MainMenu')} />
            </View>
        </View>
    </View>
}

export default RatingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a6b1e1',
        alignItems: 'center',
        flexDirection: 'column'
    },
    butt: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#424874'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 10,
        color: '#424874'
    },
    form: {
        backgroundColor: '#dcd6f7',
        padding: 30,
        minWidth: 200,
        marginTop: 20,
        marginBottom: 20
    }
});