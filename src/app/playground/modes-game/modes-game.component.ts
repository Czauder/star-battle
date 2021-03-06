import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setMode } from 'src/app/store/actions/playground.action';
import { GameState } from 'src/app/store/reducer/playground.reducer';

import { ModeType } from '../models/game.model';

@Component({
  selector: 'app-modes-game',
  templateUrl: './modes-game.component.html',
  styleUrls: ['./modes-game.component.scss'],
})
export class ModesGameComponent implements OnInit {
  constructor(private router: Router, private store: Store<GameState>) {}

  public ngOnInit(): void {}

  public navigateSingleModeCharacterBattle(): any {
    this.router.navigate(['/single-player']);
    this.store.dispatch(setMode({ modeType: ModeType.PeopleVsPeople }));
  }

  public navigateSingleModeStarshipBattle(): any {
    this.router.navigate(['/single-player']);
    this.store.dispatch(setMode({ modeType: ModeType.StarsShipVsStarsShip }));
  }

  public navigateMultiplayerMode(): any {
    this.router.navigate(['/multi-player']);
    this.store.dispatch(setMode({ modeType: ModeType.PeopleVsPeople }));
  }
}
