import { Pokemon } from '../../services/pokemonService';

export enum PokemonActions {
  SET_POKEMONS = 'setPokemons',
  SET_CURRENT_POKEMON = 'setCurrentPokemon',
}

export interface PokemonAction<T> {
  type: PokemonActions;
  payload: T;
}

export interface PokemonActionDispatchers {
  fetchPokemon: (language?: string) => PokemonAction<Pokemon[]>;
  fetchPokemonById: (id: string, language?: string) => any;
  resetCurrentPokemon: () => PokemonAction<null>;
}
