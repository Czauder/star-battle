import { GameCard } from './game-card.model';

export interface Game {
  gameType: GameType;
  modeType: ModeType;
  Player1: Player;
  Player2: Player;
}

export interface Player {
  card: GameCard;
  score: number;
}

export enum GameType {
  PlayerVsPlayer,
  PlayerVsAi,
}

export enum ModeType {
  PeopleVsPeople,
  StarsShipVsStarsShip,
}
