import { createAction, props } from '@ngrx/store';
import { ModeType, GameType } from 'src/app/playground/models/game.model';
import { GameCard } from 'src/app/playground/models/game-card.model';

export const setMode = createAction('[Mode] Set Mode', props<{ modeType: ModeType }>());

export const setGameType = createAction('[Mode] Get Estimate Success', props<{ gameType: GameType }>());

export const clearGameState = createAction('[Clear] Clear Game State');

export const resetScore = createAction('[Reset] Reset Score');

export const incrementScorePlayer1 = createAction('[Score] Increment Score Player1');

export const incrementScorePlayer2 = createAction('[Score] Increment Score Player2');

export const getPlayer1Card = createAction('[Get Card 1] Get Player 1 Card');

export const getPlayer1CardSuccess = createAction(
  '[Get Card 1] Get Player 1 Card Success',
  props<{ card: GameCard }>()
);

export const getPlayer1CardFail = createAction('[Get Card 1] Get Player 1 Card Fail');

export const getPlayer2Card = createAction('[Get Card 2] Get Player 2 Card');
export const getPlayer2CardSuccess = createAction(
  '[Get Card 2] Get Player 2 Card Success',
  props<{ card: GameCard }>()
);

export const getPlayer2CardFail = createAction('[Get Card 2] Get Player Card 2 Fail');
