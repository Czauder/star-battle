import { Action, createReducer, on } from '@ngrx/store';
import { GameType, ModeType, Player } from 'src/app/playground/models/game.model';

import {
  clearGameState,
  getPlayerCards,
  setPlayerCards,
  incrementScorePlayer1,
  incrementScorePlayer2,
  resetScore,
  setGameType,
  setMode
} from '../actions/playground.action';

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
  on(getPlayerCards, (state) => ({
    ...state,
  })),
  on(setPlayerCards, (state, action) => {
    return {
      ...state,
      player1: { ...state.player1, card: action.card1 },
      player2: { ...state.player2, card: action.card2 },
    };
  }),
  on(setMode, (state, action) => ({
    ...state,
    modeType: action.modeType,
  })),
  on(setGameType, (state, action) => ({
    ...state,
    gameType: action.gameType,
  })),
  on(clearGameState, (state) => ({
    ...initialState,
  })),
  on(resetScore, (state) => ({
    ...state,
    player1: { ...state.player1, score: 0, card: null },
    player2: { ...state.player2, score: 0, card: null },
  })),
  on(incrementScorePlayer1, (state) => ({
    ...state,
    player1: { ...state.player1, score: state.player1.score + 1 },
  })),
  on(incrementScorePlayer2, (state) => ({
    ...state,
    player2: { ...state.player2, score: state.player2.score + 1 },
  }))
);

export function gameStateReducer(state: GameState, action: Action): GameState {
  return reducer(state, action);
}
