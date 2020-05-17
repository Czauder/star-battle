import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { EmptyValuePipe } from 'src/app/shared/empty-value.pipe';

import { MultiPlayersArenaComponent } from './multi-players-arena.component';

describe('MultiPlayersArenaComponent', () => {
  let spectator: SpectatorHost<MultiPlayersArenaComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    declarations: [EmptyValuePipe],
    component: MultiPlayersArenaComponent,
    providers: [provideMockStore({})],
  });

  beforeEach(() => {
    spectator = createComponent<MultiPlayersArenaComponent>(`<app-multi-players-arena></app-multi-players-arena>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
