//@NgRx
import { ActionReducerMap } from '@ngrx/store';
import * as GameOfLife from './GameOfLife.reducers';

/**
 * Main Interface for @NgRx/Store
 */
export interface AppState {
    gameoflife: Array<number>
}

/**
 * Define the Reducers for the @NgRx store (set in app.module.ts)
 */
export const reducers: ActionReducerMap<AppState> = {
    gameoflife: GameOfLife.GameOfLifeReducer
};