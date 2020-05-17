import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let spectator: SpectatorHost<FooterComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: FooterComponent
  });

  beforeEach(() => {
    spectator = createComponent<FooterComponent>(`<app-footer></app-footer>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
