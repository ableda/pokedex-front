import { Pokedex } from '../../services/pokedexService';

export enum PokedexActions {
  SET_POKEDEX = 'setPokedex',
}

export interface PokedexAction<T> {
  type: PokedexActions;
  payload: T;
}

export interface PokedexActionDispatchers {
  fetchUserPokedex: (userId: string, token: string, language?: string) => PokedexAction<Pokedex>;
}
