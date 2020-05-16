import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModesGameComponent } from './playground/modes-game/modes-game.component';
import { BattleArenaComponent } from './playground/battle-arena/battle-arena.component';

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
        path: 'battle-arena',
        component: BattleArenaComponent,
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
