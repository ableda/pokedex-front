import { getPokemonByIdService, getPokemonService } from '../../services/pokemonService';
import { AppActions } from '../app/appTypes';
import { PokemonAction, PokemonActions } from './pokemonTypes';

export const fetchPokemon = (language?: string): any => {
  return async (dispatch: any) => {
    try {
      const pokemonResponse = await getPokemonService(language);

      if (!pokemonResponse || !pokemonResponse.length) {
        throw new Error('Bad get pokemon response');
      }

      dispatch({
        type: PokemonActions.SET_POKEMONS,
        payload: pokemonResponse,
      });
    } catch (error) {
      dispatch({
        type: AppActions.SET_SYSTEM_ERROR,
        payload: true,
      });
    }
  };
};

export const fetchPokemonById = (id: string, language?: string): any => {
  return async (dispatch: any) => {
    try {
      const pokemonResponse = await getPokemonByIdService(id, language);

      if (!pokemonResponse) {
        throw new Error('Bad get pokemon by id response');
      }

      dispatch({
        type: PokemonActions.SET_CURRENT_POKEMON,
        payload: pokemonResponse,
      });
    } catch (error) {
      dispatch({
        type: AppActions.SET_SYSTEM_ERROR,
        payload: true,
      });
    }
  };
};

export const resetCurrentPokemon = (): PokemonAction<null> => ({
  type: PokemonActions.SET_CURRENT_POKEMON,
  payload: null,
});
