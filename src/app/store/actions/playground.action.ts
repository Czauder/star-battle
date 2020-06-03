import { createAction, props } from '@ngrx/store';
import { GameCard } from 'src/app/playground/models/game-card.model';
import { ModeType } from 'src/app/playground/models/game.model';

export const setMode = createAction('[Mode] Set Mode', props<{ modeType: ModeType }>());

export const clearGameState = createAction('[Clear] Clear Game State');

export const resetScore = createAction('[Reset] Reset Score');

export const incrementScorePlayer1 = createAction('[Score] Increment Score Player1');

export const incrementScorePlayer2 = createAction('[Score] Increment Score Player2');

export const getPlayerCards = createAction('[Get Cards] Get Player Cards');

export const getPlayerCardsFail = createAction('[Get Cards] Get Player Cards Fail');

export const setPlayerCards = createAction(
  '[Set Cards] Set Player Cards Success',
  props<{ card1: GameCard, card2: GameCard }>()
);



