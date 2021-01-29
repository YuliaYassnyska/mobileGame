import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MarginView from '../../components/Common/MarginView';

export const Game = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.butt}>
                    <Button
                        color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelOne')} title='Level 1' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button
                        color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelTwo')} title='Level 2' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button
                        color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelThree')} title='Level 3' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelFour')} title='Level 4' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelFive')} title='Level 5' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelSix')} title='Level 6' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelSeven')} title='Level 7' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button
                        color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelEight')} title='Level 8' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button
                        color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelNine')} title='Level 9' />
                </View>
                <MarginView margin={10} />
                <View style={styles.butt}>
                    <Button color="#424874"
                        backgroundColor='#424874'
                        onPress={() => navigation.navigate('LevelTen')} title='Level 10' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
        minWidth: 200,
        marginTop: 20,
        marginBottom: 20
    }
});
