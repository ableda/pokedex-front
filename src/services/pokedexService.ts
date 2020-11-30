import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';
import { Pokemon } from './pokemonService';

export interface Pokedex {
  userId: string;
  pokemons: Pokemon[];
}

export const getUserPokedex = async (userId: string, token: string, language?: string): Promise<Pokedex> => {
  console.log('fetching pokedex with: ', userId, token);
  const axiosConfig: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      userId,
      language: language ? { params: { language } } : {},
    },
  };

  const pokedexResponse: AxiosResponse<Pokedex> = await axios.get(`${config.pokedexBackUrl}/pokedex`, axiosConfig);

  return pokedexResponse.data;
};
