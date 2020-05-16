import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ModeType } from 'src/app/playground/models/game.model';
import { PlaygroundService } from 'src/app/playground/playground.service';

import {
  getPlayer1Card,
  getPlayer1CardFail,
  getPlayer1CardSuccess,
  getPlayer2Card,
  getPlayer2CardFail,
  getPlayer2CardSuccess,
} from '../actions/playground.action';
import { GameState } from '../reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { selectModeType } from '../selectors/playground.selectors';

@Injectable()
export class GameStateEffect {
  public loadGetPlayer1Card$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlayer1Card),
      withLatestFrom(this.store.select(selectModeType)),
      switchMap(([action, mode]) =>
        this.playgroundService.getCardGame(mode).pipe(
          map((gameCard) => getPlayer1CardSuccess({ card: gameCard })),
          catchError((error) => of(getPlayer1CardFail()))
        )
      )
    )
  );

  public loadGetPlayer2Card$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlayer2Card),
      withLatestFrom(this.store.select(selectModeType)),
      switchMap(([action, mode]) =>
        this.playgroundService.getCardGame(mode).pipe(
          map((gameCard) => getPlayer2CardSuccess({ card: gameCard })),
          catchError((error) => of(getPlayer2CardFail()))
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
