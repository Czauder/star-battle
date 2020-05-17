import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: SpectatorHost<AppComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent<AppComponent>(`<app-root></app-root>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
