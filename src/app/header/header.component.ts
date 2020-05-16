import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../store/reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { ModeType } from '../playground/models/game.model';
import { selectModeType } from '../store/selectors/playground.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public modeType: ModeType;
  constructor(private router: Router, private store: Store<GameState>) {}

  public ngOnInit(): void {
    this.store.select(selectModeType).subscribe(mode => {
      console.log(mode);
      this.modeType = mode;
    })
  }
  
  public navigate(): any {
    this.router.navigate(['/home']);
  }
}

