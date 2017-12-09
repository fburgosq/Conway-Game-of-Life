import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//RxJs
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/shareReplay';

//NgRx Store
import { Actions, Effect } from '@ngrx/effects'
import * as GameOfLifeActions from './GameOfLife.actions';

@Injectable()
export class GOLEffects {

    // private readonly GAME_OF_LIFE = 'http://localhost/gameoflife/gameoflife.php';
    // private readonly POPULATE_GOL = 'http://localhost/gameoflife/populate.php';

    private readonly GAME_OF_LIFE = 'http://www.yobsled.com/cnb/gameoflife/gameoflife.php';
    private readonly POPULATE_GOL = 'http://www.yobsled.com/cnb/gameoflife/populate.php';

    //REQUEST TO THE BACK END SERVER THE BOARD/GRID
    @Effect()
    createBoard = this.actions$
                    .ofType(GameOfLifeActions.TRY_CREATE_BOARD)
                    .map( (action: GameOfLifeActions.TryCreate_Board) => {
                        return;
                    })
                    .switchMap(
                        () => {
                            /**
                             * Request Board/grid, FIRST TIME
                             */
                            return this._httpClnt.post<Array<number>>(
                                        this.GAME_OF_LIFE, '',
                                        {observe: 'body', responseType: 'json'}
                                    )
                                    .shareReplay()
                                    .take(1);
                        }
                    ).mergeMap(
                        (payload: Array<number>) => {
                            return [
                                {
                                    type: GameOfLifeActions.POPULATE_LIFE,
                                    payload: payload
                                }
                            ];
                        }
                    );


    //REQUEST TO THE BACK END SERVER THE BOARD/GRID
    @Effect()
    populateLife = this.actions$
                    .ofType(GameOfLifeActions.TRY_POPULATE_LIFE)
                    .map( (action: GameOfLifeActions.TryPopulate_Life) => {
                        return;
                    })
                    .switchMap(
                        () => {
                            /**
                             * Request Board/grid, FIRST TIME
                             */
                            return this._httpClnt.post<Array<number>>(
                                        this.POPULATE_GOL, '',
                                        {observe: 'body', responseType: 'json'}
                                    )
                                    .shareReplay()
                                    .take(1);
                        }
                    ).mergeMap(
                        (payload: Array<number>) => {
                            return [
                                {
                                    type: GameOfLifeActions.POPULATE_LIFE,
                                    payload: payload
                                }
                            ];
                        }
                    );
                    
    constructor(
        private actions$: Actions,
        private _httpClnt: HttpClient
    ) { }
}