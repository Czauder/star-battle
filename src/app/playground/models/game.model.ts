import { GameCard } from './game-card.model';

export interface Game {
  modeType: ModeType;
  Player1: Player;
  Player2: Player;
}

export interface Player {
  card: GameCard;
  score: number;
}

export enum ModeType {
  PeopleVsPeople,
  StarsShipVsStarsShip,
}
