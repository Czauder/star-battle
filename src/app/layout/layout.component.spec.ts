import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let spectator: SpectatorHost<LayoutComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: LayoutComponent,
  });

  beforeEach(() => {
    spectator = createComponent<LayoutComponent>(`<app-layout></app-layout>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
