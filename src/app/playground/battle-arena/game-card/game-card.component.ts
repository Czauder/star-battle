import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from '../../playground.service';
import { ModeType } from '../../models/game.model';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store/reducer/playground.reducer';
import { getPlayer1Card } from 'src/app/store/actions/playerground.action';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    console.log("halloo")
    this.store.dispatch(getPlayer1Card());
  }
}
