import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { EmptyValuePipe } from 'src/app/shared/empty-value.pipe';
import { SinglePlayerArenaComponent } from './single-player-arena.component';

describe('SinglePlayerArenaComponent', () => {
  let spectator: SpectatorHost<SinglePlayerArenaComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    declarations: [EmptyValuePipe],
    component: SinglePlayerArenaComponent,
    providers: [provideMockStore({})],
  });

  beforeEach(() => {
    spectator = createComponent<SinglePlayerArenaComponent>(`<app-single-player-arena></app-single-player-arena>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
