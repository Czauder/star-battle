import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayer1Card, getPlayer2Card } from 'src/app/store/actions/playground.action';
import { GameState } from 'src/app/store/reducer/playground.reducer';

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.scss']
})
export class BattleArenaComponent implements OnInit {

  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.store.dispatch(getPlayer1Card());
    this.store.dispatch(getPlayer2Card());
  }

}
