import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import {resetGame, submitGuess, generateAuralUpdate} from './actions';

store.dispatch(submitGuess(77));
store.dispatch(generateAuralUpdate());
console.log(store.getState());

store.dispatch(resetGame());
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
