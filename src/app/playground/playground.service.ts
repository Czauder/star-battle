import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameCard } from './models/game-card.model';
import { ModeType } from './models/game.model';
import { Person } from './models/person.model';
import { Starship } from './models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class PlaygroundService {
  constructor(private http: HttpClient) {}

  private randomPersonNumber(): number {
    return Math.floor(Math.random() * (50 + 1) + 1);
  }

  private randomStarshipNumber(): number {
    return Math.floor(Math.random() * (36 + 1) + 1);
  }

  private getPerson(): Observable<GameCard> {
    return this.http.get<Person>(`https://swapi.dev/api/people/${this.randomPersonNumber()}`).pipe(
      map((person) => {
        return {
          name: person.name,
          score: person.mass === 'unknown' ? null : parseFloat(person.mass),
        };
      })
    );
  }

  private getStarship(): Observable<GameCard> {
    return this.http.get<Starship>(`https://swapi.dev/api/starships/${this.randomStarshipNumber()}`).pipe(
      map((starship) => {
        return {
          name: starship.name,
          score: starship.crew === 'unknown' ? null : parseFloat(starship.crew),
        };
      })
    );
  }

  public getCardGame(modeType: ModeType): Observable<GameCard> {
    if (modeType === ModeType.StarsShipVsStarsShip) {
      return this.getStarship();
    }
    if (this.getPerson()) {
    }
  }
}
