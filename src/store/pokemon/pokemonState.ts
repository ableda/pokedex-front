import { Pokemon } from '../../services/pokemonService';

export interface PokemonState {
  pokemons: Pokemon[];
  currentPokemon: Pokemon | null;
}

export const initialPokemonState: PokemonState = {
  pokemons: [],
  currentPokemon: null,
};
