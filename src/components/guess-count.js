import React from 'react';
import {connect} from 'react-redux';
import './guess-count.css';

export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount.length}</span> {guessNoun}!
        </h2>
    );
}

export const mapStateToProps = state => ({
    guessCount: state.guesses,   
    });

export default connect (mapStateToProps)(GuessCount);