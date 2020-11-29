import axios, { AxiosResponse } from 'axios';
import config from '../config';

interface LoginResponse {
  token: string;
  userId: string;
}

export const loginService = async (email: string, password: string): Promise<LoginResponse | undefined> => {
  const loginResponse: AxiosResponse<LoginResponse> = await axios.post(
    `${config.pokedexBackUrl}/login`,
    {
      email,
      password,
    },
    { withCredentials: true },
  );

  return loginResponse.data;
};
