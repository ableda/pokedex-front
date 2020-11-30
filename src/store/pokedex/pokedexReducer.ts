import { initialPokedexState, PokedexState } from './pokedexState';
import { PokedexAction, PokedexActions } from './pokedexTypes';

export const pokedexReducer = (state: PokedexState = initialPokedexState, action: PokedexAction<any>): PokedexState => {
  switch (action.type) {
    case PokedexActions.SET_POKEDEX:
      return {
        ...state,
        userPokedex: action.payload,
      };
    default:
      return state;
  }
};
