import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GameState } from '../store/reducer/playground.reducer';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../store/selectors/playground.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<GameState>, private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.store.select(selectIsLoading).subscribe((isLoading) => {
      if (isLoading) { this.spinner.show(); }
      else { this.spinner.hide(); }
    });
  }
}
