import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayerCards, incrementScorePlayer1, incrementScorePlayer2 } from 'src/app/store/actions/playground.action';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import {
  selectCheckWinner,
  selectPlayer1,
  selectPlayer1Score,
  selectPlayer2,
  selectPlayer2Score,
  selectIsLoading,
} from 'src/app/store/selectors/playground.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-player-arena',
  templateUrl: './single-player-arena.component.html',
  styleUrls: ['./single-player-arena.component.scss'],
})
export class SinglePlayerArenaComponent implements OnInit, OnDestroy {
  public nameCardPlayer1: string;
  public scoreCardPlayer1: number;
  public nameCardPlayer2: string;
  public scoreCardPlayer2: number;
  public scorePlayer1: number;
  public scorePlayer2: number;
  public isWinner: number;
  public destroy$ = new Subject();

  constructor(private store: Store<GameState>) {}

  public ngOnInit(): void {
    this.store
      .select(selectPlayer1)
      .pipe(takeUntil(this.destroy$))
      .subscribe((player1) => {
        this.nameCardPlayer1 = player1?.card?.name;
        this.scoreCardPlayer1 = player1?.card?.score;
      });

    this.store
      .select(selectPlayer2)
      .pipe(takeUntil(this.destroy$))
      .subscribe((player2) => {
        this.nameCardPlayer2 = player2?.card?.name;
        this.scoreCardPlayer2 = player2?.card?.score;
      });

    this.store
      .select(selectCheckWinner)
      .pipe(takeUntil(this.destroy$))
      .subscribe((checkWinner) => {
        this.isWinner = checkWinner;
        console.log(`score: ${checkWinner}`);
        if (checkWinner > 0) {
          this.store.dispatch(incrementScorePlayer1());
        }
        if (checkWinner < 0) {
          this.store.dispatch(incrementScorePlayer2());
        }
      });

    this.store
      .select(selectPlayer1Score)
      .pipe(takeUntil(this.destroy$))
      .subscribe((score1) => (this.scorePlayer1 = score1));
    this.store
      .select(selectPlayer2Score)
      .pipe(takeUntil(this.destroy$))
      .subscribe((score2) => (this.scorePlayer2 = score2));
  }

  public playGame(): void {
    this.store.dispatch(getPlayerCards());
  }

  public result1(): string {
    if (this.isWinner === null) {
      return null;
    }
    return this.isWinner > 0 ? 'Winner' : 'Lose';
  }

  public result2(): string {
    if (this.isWinner === null) {
      return null;
    }
    return this.isWinner < 0 ? 'Winner' : 'Lose';
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}
