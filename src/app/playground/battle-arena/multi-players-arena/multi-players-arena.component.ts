import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import { getPlayerCards } from 'src/app/store/actions/playground.action';

@Component({
  selector: 'app-multi-players-arena',
  templateUrl: './multi-players-arena.component.html',
  styleUrls: ['./multi-players-arena.component.scss'],
})
export class MultiPlayersArenaComponent implements OnInit {
  public nameCardPlayer1: string;
  public scoreCardPlayer1: number;
  public nameCardPlayer2: string;
  public scoreCardPlayer2: number;
  public scorePlayer1: number;
  public scorePlayer2: number;
  public isWinner = 0;
  public form: FormGroup;

  constructor(private store: Store<GameState>, private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      buttonPlayer1Form: ['', Validators.required],
      buttonPlayer2Form: ['', Validators.required],
    });

    console.log(this.form);
  }

  public buttonPlayer1(): void {
    console.log('hallooo');
    if (this.form.valid && this.form.touched) {
      this.store.dispatch(getPlayerCards());
    }
  }

  public buttonPlayer2(): void {
    console.log('hallooo2');
    // console.log(this.form.value);
  }

  public result1(): string {
    if (this.isWinner === null) { return null; }
    return this.isWinner > 0 ? 'Winner' : 'Lose';
  }

  public result2(): string {
    if (this.isWinner === null) { return null; }
    return this.isWinner < 0 ? 'Winner' : 'Lose';
  }
}
