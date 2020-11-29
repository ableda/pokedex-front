import axios, { AxiosResponse } from 'axios';
import config from '../config';

interface PokemonBase {
  HP: number;
  Attack: number;
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
}

export interface Pokemon {
  _id: string;
  name: string;
  type: string[];
  base?: PokemonBase;
}

export const getPokemonService = async (language?: string): Promise<Pokemon[]> => {
  const params = language ? { params: { language } } : {};
  const pokemonListResponse: AxiosResponse<Pokemon[]> = await axios.get(`${config.pokedexBackUrl}/pokemon`, { ...params });

  return pokemonListResponse.data;
};

export const getPokemonByIdService = async (id: string, language?: string): Promise<Pokemon> => {
  const params = language ? { params: { language } } : {};
  const pokemonResponse: AxiosResponse<Pokemon> = await axios.get(`${config.pokedexBackUrl}/pokemon/${id}`, { ...params });

  return pokemonResponse.data;
};
