import { Component, OnInit, Input } from '@angular/core';
import { PlaygroundService } from '../../playground.service';
import { ModeType, Game } from '../../models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() name: string;
  @Input() score: number;

  constructor(private playgroundService: PlaygroundService) {}

  ngOnInit(): void {
 
  }
}
