import { SignUpAction, SignUpActions } from './signUpTypes';
import { SignUpState, initialSignUpState } from './signUpState';

export const signUpReducer = (state: SignUpState = initialSignUpState, action: SignUpAction<any>): SignUpState => {
  switch (action.type) {
    case SignUpActions.SET_SIGN_UP_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SignUpActions.SET_SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SignUpActions.SET_SHOW_SIGN_UP:
      return {
        ...state,
        showSignUp: action.payload,
      };
    default:
      return state;
  }
};
