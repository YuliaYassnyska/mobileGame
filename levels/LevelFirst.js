import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2

import Score from '../components/Score';
import Card from '../components/GameCard';

import helpers from './helpers';

export default class LevelFirth extends React.Component {

    constructor(props) {
        super(props);
        this.renderCards = this.renderCards.bind(this);
        this.resetCards = this.resetCards.bind(this);

        let sources = {
            'fontawesome': FontAwesome,
            'entypo': Entypo,
            'ionicons': Ionicons
        };

        let cards = [
            {
                src: 'fontawesome',
                name: 'heart',
                color: 'red'
            },
            {
                src: 'entypo',
                name: 'feather',
                color: '#7d4b12'
            },
        ];

        let clone = JSON.parse(JSON.stringify(cards));

        this.cards = cards.concat(clone);
        this.cards.map((obj) => {
            let id = Math.random().toString(36).substring(7);
            obj.id = id;
            obj.src = sources[obj.src];
            obj.is_open = false;
        });

        this.cards = this.cards.shuffle();
        this.state = {
            current_selection: [],
            selected_pairs: [],
            score: 0,
            cards: this.cards
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    {
                        this.renderRows.call(this)
                    }
                </View>
                <Score score={this.state.score} />
                <View style={styles.butt}>
                    <Button
                        onPress={this.resetCards}
                        title="Reset"
                        color="#424874"
                    />
                    <Button 
                        title="Next level"
                        color="#424874"
                        onPress={() => this.props.navigation.navigate('LevelTwo')}
                    />
                     <Button 
                        title="Menu"
                        color="#424874"
                        onPress={() => this.props.navigation.navigate('MainMenu')}
                    />
                </View>
            </View>
        );
    }


    resetCards() {
        let cards = this.cards.map((obj) => {
            obj.is_open = false;
            return obj;
        });

        cards = cards.shuffle();

        this.setState({
            current_selection: [],
            selected_pairs: [],
            cards: cards,
            score: 0
        });
    }


    renderRows() {

        let contents = this.getRowContents(this.state.cards);
        return contents.map((cards, index) => {
            return (
                <View key={index} style={styles.row}>
                    { this.renderCards(cards)}
                </View>
            );
        });

    }


    renderCards(cards) {
        return cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    src={card.src}
                    name={card.name}
                    color={card.color}
                    is_open={card.is_open}
                    clickCard={this.clickCard.bind(this, card.id)}
                />
            );
        });
    }


    clickCard(id) {
        let selected_pairs = this.state.selected_pairs;
        let current_selection = this.state.current_selection;
        let score = this.state.score;

        let index = this.state.cards.findIndex((card) => {
            return card.id == id;
        });

        let cards = this.state.cards;

        if (cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1) {

            cards[index].is_open = true;

            current_selection.push({
                index: index,
                name: cards[index].name
            });

            if (current_selection.length == 2) {
                if (current_selection[0].name == current_selection[1].name) {
                    score += 1;
                    selected_pairs.push(cards[index].name);
                } else {

                    cards[current_selection[0].index].is_open = false;

                    setTimeout(() => {
                        cards[index].is_open = false;
                        this.setState({
                            cards: cards
                        });
                    }, 500);
                }

                current_selection = [];
            }

            this.setState({
                score: score,
                cards: cards,
                current_selection: current_selection
            });

        }

    }


    getRowContents(cards) {
        let contents_r = [];
        let contents = [];
        let count = 0;
        cards.forEach((item) => {
            count += 1;
            contents.push(item);
            if (count == 2) {
                contents_r.push(contents)
                count = 0;
                contents = [];
            }
        });

        return contents_r;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#a6b1e1'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    butt: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#424874',
        maxWidth: 200,
        marginBottom: 20,
        marginLeft: 90
    },
    body: {
        flex: 18,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20
    }
});
