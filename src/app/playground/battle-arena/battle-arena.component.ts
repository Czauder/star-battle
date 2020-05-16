import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import { getPlayer1Card } from 'src/app/store/actions/playerground.action';

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.scss']
})
export class BattleArenaComponent implements OnInit {

  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    console.log("halloo")
    this.store.dispatch(getPlayer1Card());
  }

}
