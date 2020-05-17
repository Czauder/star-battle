import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { ModeTypePipe } from '../shared/mode-type.pipe';

describe('HeaderComponent', () => {
  let spectator: SpectatorHost<HeaderComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: HeaderComponent,
    declarations: [ModeTypePipe],
    providers: [provideMockStore({}), mockProvider(Router)],
  });

  beforeEach(() => {
    spectator = createComponent<HeaderComponent>(`<app-header></app-header>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
