import { Action } from '@ngrx/store';

//Define List of Actions

export const TRY_CREATE_BOARD = 'TRY_CREATE_BOARD';
export const TRY_POPULATE_LIFE = 'TRY_POPULATE_LIFE';
export const POPULATE_LIFE = 'POPULATE_LIFE';

export class TryCreate_Board implements Action {
    readonly type = TRY_CREATE_BOARD;
}

export class Populate_Life implements Action {
    readonly type = POPULATE_LIFE;

    constructor(public payload: Array<number>) {}
}

export class TryPopulate_Life implements Action {
    readonly type = TRY_POPULATE_LIFE;
}

export type GameOfLifeActions = TryCreate_Board | Populate_Life | TryPopulate_Life;
