import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, forkJoin, observable } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, mergeMap } from 'rxjs/operators';
import { ModeType } from 'src/app/playground/models/game.model';
import { PlaygroundService } from 'src/app/playground/playground.service';

import { getPlayerCards, setPlayerCards, getPlayerCardsFail } from '../actions/playground.action';
import { GameState } from '../reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { selectModeType } from '../selectors/playground.selectors';

@Injectable()
export class GameCardEffect {
  public loadPlayersCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlayerCards),
      withLatestFrom(this.store.select(selectModeType)),
      switchMap(([action, mode]) =>
        forkJoin([this.playgroundService.getCardGame(mode), this.playgroundService.getCardGame(mode)]).pipe(
          mergeMap(([gameCard1, gameCard2]) => [setPlayerCards({ card1: gameCard1, card2: gameCard2 })]),
          catchError((error) => of(getPlayerCardsFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playgroundService: PlaygroundService,
    private store: Store<GameState>
  ) {}
}
