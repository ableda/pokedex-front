import { Pokedex } from '../../services/pokedexService';

export interface PokedexState {
  userPokedex: Pokedex | null;
}

export const initialPokedexState: PokedexState = {
  userPokedex: null,
};
