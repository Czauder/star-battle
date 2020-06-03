import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GameState } from '../reducer/playground.reducer';

export const selectGameState = createFeatureSelector<GameState>('GameState');

export const selectModeType = createSelector(selectGameState, (state) => state.modeType);

export const selectPlayer1 = createSelector(selectGameState, (state) => state.player1);

export const selectPlayer2 = createSelector(selectGameState, (state) => state.player2);

export const selectPlayer1Score = createSelector(selectGameState, (state) => state?.player1?.score);

export const selectPlayer2Score = createSelector(selectGameState, (state) => state?.player2?.score);

export const selectIsLoading = createSelector(selectGameState, (state) => state.isLoading);

export const selectIsDisplay = createSelector(selectGameState, (state) => state.isDisplay);

export const selectCheckWinner = createSelector(selectGameState, (state) => {
  if (typeof state?.player1?.card?.score === 'number' && typeof state?.player2?.card?.score === 'number') {
    const player1Score = state?.player1?.card?.score;
    const player2Score = state?.player2?.card?.score;
    return player1Score - player2Score;
  }
  return null;
});
