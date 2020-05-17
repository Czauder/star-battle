import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import { getPlayerCards, incrementScorePlayer1, incrementScorePlayer2 } from 'src/app/store/actions/playground.action';
import {
  selectPlayer1Score,
  selectPlayer2Score,
  selectPlayer1,
  selectPlayer2,
  selectCheckWinner,
} from 'src/app/store/selectors/playground.selectors';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-multi-players-arena',
  templateUrl: './multi-players-arena.component.html',
  styleUrls: ['./multi-players-arena.component.scss'],
})
export class MultiPlayersArenaComponent implements OnInit, OnDestroy {
  public nameCardPlayer1: string;
  public scoreCardPlayer1: number;
  public nameCardPlayer2: string;
  public scoreCardPlayer2: number;
  public scorePlayer1: number;
  public scorePlayer2: number;
  public isWinner = 0;
  public form: FormGroup;
  public destroy$ = new Subject();

  constructor(private store: Store<GameState>, private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      buttonPlayer1Form: [false, Validators.required],
      buttonPlayer2Form: [false, Validators.required],
    });

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

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value.buttonPlayer1Form && value.buttonPlayer2Form) {
        this.store.dispatch(getPlayerCards());
        this.form.reset();
      }
    });
  }

  public buttonPlayer1(): void {
    this.form.get('buttonPlayer1Form').setValue(true);
  }

  public buttonPlayer2(): void {
    this.form.get('buttonPlayer2Form').setValue(true);
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

  public get ButtonValue1(): boolean {
    return this.form.get('buttonPlayer1Form').value;
  }

  public get ButtonValue2(): boolean {
    return this.form.get('buttonPlayer2Form').value;
  }
}
