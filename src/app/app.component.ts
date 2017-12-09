import { Component } from '@angular/core';


/**
 * SERVICES
 */
import { GameOfLifeService } from './services/gameoflife.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  /**
   * @param Observable<Number[]>, keeps matrix grid data
   */
  gol_grid$; 

  start_game = false;

  /**
   * NgModels
   */
  doTimer: number = 600;


  constructor(
    private _gameoflifeService: GameOfLifeService
  ) { 
    /**
     * Request Store Game Of Life Data<Array<number>>
     */
    this.gol_grid$ = this._gameoflifeService.requestStore();

    this.createBoard();

  }

  /**
     * Create First Time Board/Grid, for the Game
     */  
  createBoard() {
    this._gameoflifeService.requestTryCreateBoard();
  }

  populateLife() {
    this.start_game = true;
    /**
     * Creates a tic tac clock to populate life
     */
    this._gameoflifeService.requestPopulateLife(this.doTimer);
  }

  /**
   * Stop populate life in the game
   */
  killPopulateLife() {
    this.start_game = false;
    this._gameoflifeService.killPopulateLife();
  }

  /**
   * Restart the game
   */
  resetPopulateLife() {
    this.killPopulateLife();
    this.createBoard();
  }

  resetTimer() {
    if (this.start_game)
      this.populateLife();
  }
  
}
