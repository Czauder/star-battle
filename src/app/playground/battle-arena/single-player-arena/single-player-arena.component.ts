import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getPlayer1Card,
  getPlayer2Card,
  incrementScorePlayer1,
  incrementScorePlayer2,
} from 'src/app/store/actions/playground.action';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import {
  selectCheckWinner,
  selectPlayer1,
  selectPlayer1Score,
  selectPlayer2,
  selectPlayer2Score,
} from 'src/app/store/selectors/playground.selectors';

@Component({
  selector: 'app-single-player-arena',
  templateUrl: './single-player-arena.component.html',
  styleUrls: ['./single-player-arena.component.scss'],
})
export class SinglePlayerArenaComponent implements OnInit {
  public nameCardPlayer1: string;
  public scoreCardPlayer1: number;
  public nameCardPlayer2: string;
  public scoreCardPlayer2: number;
  public scorePlayer1: number;
  public scorePlayer2: number;
  public isWinner = 0;

  constructor(private store: Store<GameState>) {}

  public ngOnInit(): void {
    this.store.select(selectPlayer1).subscribe((player1) => {
      console.log(player1);
      this.nameCardPlayer1 = player1?.card?.name;
      this.scoreCardPlayer1 = player1?.card?.score;
    });

    this.store.select(selectPlayer2).subscribe((player2) => {
      console.log(player2);
      this.nameCardPlayer2 = player2?.card?.name;
      this.scoreCardPlayer2 = player2?.card?.score;
    });

    this.store.select(selectCheckWinner).subscribe((checkWinner) => {
      this.isWinner = checkWinner;
      console.log(this.isWinner);
      if (checkWinner > 0) {
        this.store.dispatch(incrementScorePlayer1());
      }
      if (checkWinner < 0) {
        this.store.dispatch(incrementScorePlayer2());
      }
    });

    this.store.select(selectPlayer1Score).subscribe((score1) => (this.scorePlayer1 = score1));
    this.store.select(selectPlayer2Score).subscribe((score2) => (this.scorePlayer2 = score2));
  }

  public playGame(): void {
    this.store.dispatch(getPlayer1Card());
    this.store.dispatch(getPlayer2Card());
  }
}
