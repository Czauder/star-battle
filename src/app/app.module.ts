import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { BattleArenaComponent } from './playground/battle-arena/battle-arena.component';
import { GameCardComponent } from './playground/battle-arena/game-card/game-card.component';
import { MultiPlayersArenaComponent } from './playground/battle-arena/multi-players-arena/multi-players-arena.component';
import { SinglePlayerArenaComponent } from './playground/battle-arena/single-player-arena/single-player-arena.component';
import { ModesGameComponent } from './playground/modes-game/modes-game.component';
import { gameStateReducer } from './store/reducer/playground.reducer';
import { GameStateEffect } from './store/effects/playground.effects';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ModesGameComponent,
    BattleArenaComponent,
    SinglePlayerArenaComponent,
    MultiPlayersArenaComponent,
    GameCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ GameState: gameStateReducer }),
    EffectsModule.forRoot([GameStateEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
