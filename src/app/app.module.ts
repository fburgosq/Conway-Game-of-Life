import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * NgRx Store / Actions / Effects
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducers';
import { GOLEffects } from './store/GameOfLife.effects';

/**
 * SERVICES
 */
import { GameOfLifeService } from './services/gameoflife.service';

/**
 * COMPONENTS
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GOLEffects]),
  ],
  providers: [
    GameOfLifeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
