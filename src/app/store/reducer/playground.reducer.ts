import { Action, createReducer, on } from '@ngrx/store';
import { GameType, ModeType, Player } from 'src/app/playground/models/game.model';

import {
    clearGameState,
    getPlayer1Card,
    getPlayer1CardFail,
    getPlayer1CardSuccess,
    incrementScorePlayer1,
    incrementScorePlayer2,
    resetScore,
    setGameType,
    setMode,
} from '../actions/playerground.action';

export interface GameState {
  gameType: GameType;
  modeType: ModeType;
  player1: Player;
  player2: Player;
}

const initialState: GameState = {
  gameType: null,
  modeType: null,
  player1: { card: null, score: 0 },
  player2: { card: null, score: 0 },
};

const reducer = createReducer(
  initialState,
  on(getPlayer1Card, (state) => ({
    ...state,
  })),
  on(getPlayer1CardSuccess, (state, action) => {
    return {
      ...state,
      card: action.card,
    };
  }),
  on(getPlayer1CardFail, (state) => ({
    ...state,
  })),
  on(setMode, (state, action) => ({
    ...state,
    modeType: action.modeType,
  })),
  on(setGameType, (state, action) => ({
    ...state,
    gameType: action.gameType,
  })),
  on(clearGameState, (state) => ({
    ...initialState
  })),
  on(resetScore, (state) => ({
    ...state,
    player1: {...state.player1, score: 0},
    player2: {...state.player2, score: 0},
  })),
  on(incrementScorePlayer1, (state) => ({
    ...state,
    player1: {...state.player1, score: state.player1.score ++},
  })),
  on(incrementScorePlayer2, (state) => ({
    ...state,
    player2: {...state.player2, score: state.player2.score ++},
  })),
);

export function gameStateReducer(state: GameState, action: Action): GameState {
  return reducer(state, action);
}
