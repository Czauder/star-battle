import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modes-game',
  templateUrl: './modes-game.component.html',
  styleUrls: ['./modes-game.component.scss']
})
export class ModesGameComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {}

  public navigateS(): any {
    this.router.navigate(['/single-player']);
  }

  public navigateM(): any {
    this.router.navigate(['/multi-player']);
  }
}
