import { getUserPokedex } from '../../services/pokedexService';
import { getUserId } from '../../utils/isAuthenticated';
import { AppActions } from '../app/appTypes';
import { PokedexAction, PokedexActions } from './pokedexTypes';

export const fetchUserPokedex = (language?: string): any => {
  return async (dispatch: any) => {
    try {
      const authData = getUserId();

      if (authData === null) {
        throw new Error('Auth error');
      }

      const pokedexResponse = await getUserPokedex(authData.userId, authData.token, language);

      if (!pokedexResponse) {
        throw new Error('Bad get user pokedex response');
      }

      dispatch({
        type: PokedexActions.SET_POKEDEX,
        payload: pokedexResponse,
      });
    } catch (error) {
      dispatch({
        type: AppActions.SET_SYSTEM_ERROR,
        payload: true,
      });
    }
  };
};

export const resetCurrentPokedex = (): PokedexAction<null> => ({
  type: PokedexActions.SET_POKEDEX,
  payload: null,
});
