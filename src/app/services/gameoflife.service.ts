import { Injectable } from '@angular/core';

/**
 * NGRX
 */
import { Store } from '@ngrx/store';
import * as GOLActions from '../store/GameOfLife.actions';
import { AppState } from '../store/app.reducers';

/**
 * RxJs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class GameOfLifeService {

    populate: Subscription;

    constructor(
        private _store: Store<AppState>
    ) { }

    /**
     * Request Game Of Life Store DATA
     * @return Observable<number[]>, Observable with GameOfLife Store Data
     */
    requestStore(): Observable<number[]> {
        return this._store.select('gameoflife');
    }

    /**
     * Executes Action `TryCreate_Board() => trigger @Effects`
     */
    requestTryCreateBoard() {
        this._store.dispatch(new GOLActions.TryCreate_Board());
    }

    /**
     * Request to Populate Life in the grid/matrix/board of the Game Of Life
     */
    requestPopulateLife(utime: number) {
        this.populate = 
            Observable.interval(utime)
                .subscribe(
                    () => this._store.dispatch(new GOLActions.TryPopulate_Life())
                );
    }

    /**
     * Kill the populateLife interval
     */
    killPopulateLife() {
        this.populate.unsubscribe();
    }

}