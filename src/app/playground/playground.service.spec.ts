import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { PlaygroundService } from './playground.service';
import { ModeType } from './models/game.model';

describe('HttpClient Playground testing', () => {
  let spectator: SpectatorHttp<PlaygroundService>;
  const createHttp = createHttpFactory(PlaygroundService);

  beforeEach(() => (spectator = createHttp()));

  const modeTypePeopleVsPeople: ModeType = ModeType.PeopleVsPeople;
  const modeTypeStarshipVsStarship: ModeType = ModeType.StarsShipVsStarsShip;
  const characterNumber = 5;
  const starshipNumber = 5;

  it('should GET CHARACTER', () => {
    spectator.service.getCardGame(modeTypePeopleVsPeople).subscribe();
    spectator.expectOne(`https://swapi.dev/api/people/${characterNumber}`, HttpMethod.GET);
  });

  it('should GET STARSHIP', () => {
    spectator.service.getCardGame(modeTypeStarshipVsStarship).subscribe();
    spectator.expectOne(`https://swapi.dev/api/starships/${starshipNumber}`, HttpMethod.GET);
  });
});
