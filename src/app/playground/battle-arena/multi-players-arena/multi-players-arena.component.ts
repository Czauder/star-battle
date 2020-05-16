import { Component, OnInit } from '@angular/core';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { selectCheckWinner } from 'src/app/store/selectors/playground.selectors';

@Component({
  selector: 'app-multi-players-arena',
  templateUrl: './multi-players-arena.component.html',
  styleUrls: ['./multi-players-arena.component.scss'],
})
export class MultiPlayersArenaComponent implements OnInit {
  public selectWinner: number;

  constructor(private store: Store<GameState>) {}

  public ngOnInit(): void {
  }

  public playGame(): void {
    this.store.select(selectCheckWinner).subscribe((winner) => (this.selectWinner = winner));
  }
}
