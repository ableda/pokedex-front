import { signUpService } from '../../services/signUpService';
import { SignUpAction, SignUpActions } from './signUpTypes';

export const setShowSignUp = (show: boolean): SignUpAction<boolean> => ({ type: SignUpActions.SET_SHOW_SIGN_UP, payload: show });

export const signUpUser = (username: string, password: string): any => {
  return async (dispatch: any) => {
    try {
      const signUpResponse = await signUpService(username, password);

      if (!signUpResponse || !signUpResponse.message) {
        throw new Error('Bad signUp response');
      }

      dispatch({
        type: SignUpActions.SET_SIGN_UP_MESSAGE,
        payload: signUpResponse.message,
      });
    } catch (error) {
      dispatch({
        type: SignUpActions.SET_SIGN_UP_ERROR,
        payload: error.message,
      });
    }
  };
};
