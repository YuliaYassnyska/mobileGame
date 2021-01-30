import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import MarginView from '../../components/Common/MarginView';

import firebase from '../../components/firebase';

export const Game = ({ navigation }) => {


    const [levelOne, setLevelOne] = useState(false)
    const [levelTwo, setLevelTwo] = useState(false)
    const [levelThree, setLevelThree] = useState(false)
    const [levelFour, setLevelFour] = useState(false)
    const [levelFive, setLevelFive] = useState(false)
    const [levelSix, setLevelSix] = useState(false)
    const [levelSeven, setLevelSeven] = useState(false)
    const [levelEight, setLevelEight] = useState(false)
    const [levelNine, setLevelNine] = useState(false)
    const [levelTen, setLevelTen] = useState(false)

    const getLevels = () => {
        firebase.db.collection('score').doc('PB959oJmX6IAKuYxUzGB').get().then(function (doc) {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                setLevelOne(doc.get('levelOne'));
                setLevelTwo(doc.get('levelTwo'));
                setLevelThree(doc.get('levelThree'));
                setLevelFour(doc.get('levelFour'));
                setLevelFive(doc.get('levelFive'));
                setLevelSix(doc.get('levelSix'));
                setLevelSeven(doc.get('levelSeven'));
                setLevelEight(doc.get('levelEight'));
                setLevelNine(doc.get('levelNine'));
                setLevelTen(doc.get('levelTen'));
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                {getLevels()}
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelOne')} title='Level 1' />
                    </View>
                    {levelOne === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelTwo')} title='Level 2' />
                    </View>
                    {levelTwo === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelThree')} title='Level 3' />
                    </View>
                    {levelThree === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelFour')} title='Level 4' />
                    </View>
                    {levelFour === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelFive')} title='Level 5' />
                    </View>
                    {levelFive === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelSix')} title='Level 6' />
                    </View>
                    {levelSix === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelSeven')} title='Level 7' />
                    </View>
                    {levelSeven === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelEight')} title='Level 8' />
                    </View>
                    {levelEight === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelNine')} title='Level 9' />
                    </View>
                    {levelNine === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
                </View>
                <MarginView margin={10} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.butt}>
                        <Button
                            color="#424874"
                            backgroundColor='#424874'
                            onPress={() => navigation.navigate('LevelTen')} title='Level 10' />
                    </View>
                    {levelTen === true ? <TouchableOpacity style={styles.done}><Text style={styles.text}>Done</Text></TouchableOpacity> : null}
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
        backgroundColor: '#a6b1e1',
        flexDirection: 'column'
    },
    done: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#424874',
        padding: 4,
        marginLeft: 16
    },
    butt: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#424874',
        display: 'flex',
        width: 100
    },
    text: {
        color: '#424874',
        fontSize: 16,
        fontWeight: 'bold'
    },
    form: {
        backgroundColor: '#dcd6f7',
        padding: 30,
        minWidth: 200,
        marginTop: 20,
        marginBottom: 20
    }
});
