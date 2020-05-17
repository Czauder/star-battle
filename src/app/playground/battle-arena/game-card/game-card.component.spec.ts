import { GameCardComponent } from './game-card.component';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { EmptyValuePipe } from 'src/app/shared/empty-value.pipe';
import { UnknownPipe } from 'src/app/shared/unknown.pipe';

describe('GameCardComponent', () => {
  let spectator: SpectatorHost<GameCardComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: GameCardComponent,
    declarations: [EmptyValuePipe, UnknownPipe],
    imports: [],
    providers: [provideMockStore({})],
  });

  beforeEach(() => {
    spectator = createComponent<GameCardComponent>(`<app-game-card></app-game-card>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
