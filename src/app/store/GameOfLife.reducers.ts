import * as GOLActions from './GameOfLife.actions';


const initialLoginState = [];

/**
 * Login reducer for LoginStore
 * 
 * @since 1.0.0
 * 
 * @param state 
 * @param action 
 */
export function GameOfLifeReducer (
    state = initialLoginState, 
    action: GOLActions.GameOfLifeActions) {

    switch (action.type) {

        case GOLActions.POPULATE_LIFE:
            return action.payload;

        default:
            return state;
    }
}