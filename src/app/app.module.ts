import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { BattleArenaComponent } from './playground/battle-arena/battle-arena.component';
import { MultiPlayersArenaComponent } from './playground/battle-arena/multi-players-arena/multi-players-arena.component';
import { SinglePlayerArenaComponent } from './playground/battle-arena/single-player-arena/single-player-arena.component';
import { ModesGameComponent } from './playground/modes-game/modes-game.component';
import { GameCardComponent } from './playground/battle-arena/game-card/game-card.component';

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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
