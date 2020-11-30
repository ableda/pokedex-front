import axios, { AxiosResponse } from 'axios';
import config from '../config';

interface SignUpResponse {
  message: string;
}

export const signUpService = async (email: string, password: string): Promise<SignUpResponse | undefined> => {
  const loginResponse: AxiosResponse<SignUpResponse> = await axios.post(
    `${config.pokedexBackUrl}/signup`,
    {
      email,
      password,
    },
    { withCredentials: true },
  );

  return loginResponse.data;
};
