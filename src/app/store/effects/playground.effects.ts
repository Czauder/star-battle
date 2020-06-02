import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { PlaygroundService } from 'src/app/playground/playground.service';

import { getPlayerCards, getPlayerCardsFail, setPlayerCards } from '../actions/playground.action';
import { GameState } from '../reducer/playground.reducer';
import { selectModeType } from '../selectors/playground.selectors';

@Injectable()
export class GameCardEffect {
  public loadPlayersCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlayerCards),
      withLatestFrom(this.store.select(selectModeType)),
      switchMap(([action, mode]) =>
        forkJoin([this.playgroundService.getCardGame(mode), this.playgroundService.getCardGame(mode)]).pipe(
          map(([gameCard1, gameCard2]) => setPlayerCards({ card1: gameCard1, card2: gameCard2 })),
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
