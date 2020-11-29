import { PokemonState, initialPokemonState } from './pokemonState';
import { PokemonAction, PokemonActions } from './pokemonTypes';

export const pokemonReducer = (state: PokemonState = initialPokemonState, action: PokemonAction<any>): PokemonState => {
  switch (action.type) {
    case PokemonActions.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case PokemonActions.SET_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
      };
    default:
      return state;
  }
};
