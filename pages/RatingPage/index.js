import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RatingCard from '../../components/RatingCard';
import { medal } from '../../components/mocks'


export default class RatingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            firstUser: 'Tom Hardy',
            secondUser: 'Bella Thorn',
            thirdUser: 'Kris Even',
        } 
    };
    
    render() {
        return <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.title}>Top 3 best players</Text>
            <RatingCard user={'Tom Hardy'} number={1} medal={medal.gold} />
            <RatingCard user={'Bella Thorn'} number={2} medal={medal.silver} />
            <RatingCard user={'Kris Even'} number={3} medal={medal.bronze} />
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
    
}


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