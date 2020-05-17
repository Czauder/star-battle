import { Router } from '@angular/router';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { ModesGameComponent } from './modes-game.component';

describe('ModesGameComponent', () => {
  let spectator: SpectatorHost<ModesGameComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: ModesGameComponent,
    providers: [provideMockStore({}), mockProvider(Router)],
  });

  beforeEach(() => {
    spectator = createComponent<ModesGameComponent>(`<app-modes-game></app-modes-game>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
