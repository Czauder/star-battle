import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../store/reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { ModeType } from '../playground/models/game.model';
import { selectModeType, selectIsDisplay } from '../store/selectors/playground.selectors';
import { resetScore, clearGameState } from '../store/actions/playground.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public modeType: ModeType;
  public isDisplay: boolean;
  constructor(private router: Router, private store: Store<GameState>) {}

  public ngOnInit(): void {
    this.store.select(selectModeType).subscribe((mode) => (this.modeType = mode));
    this.store.select(selectIsDisplay).subscribe((display) => (this.isDisplay = display));
  }

  public navigate(): any {
    this.router.navigate(['/home']);
    this.store.dispatch(clearGameState());
  }

  public resetGame(): any {
    this.store.dispatch(resetScore());
  }
}
