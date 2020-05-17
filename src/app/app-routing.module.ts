import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { MultiPlayersArenaComponent } from './playground/battle-arena/multi-players-arena/multi-players-arena.component';
import { SinglePlayerArenaComponent } from './playground/battle-arena/single-player-arena/single-player-arena.component';
import { ModesGameComponent } from './playground/modes-game/modes-game.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: ModesGameComponent,
      },
      {
        path: 'single-player',
        component: SinglePlayerArenaComponent,
      },
      {
        path: 'multi-player',
        component: MultiPlayersArenaComponent,
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
