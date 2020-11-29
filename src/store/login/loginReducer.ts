import { LoginAction, LoginActions } from './loginTypes';
import { initialLoginState, LoginState } from './loginState';

export const loginReducer = (state: LoginState = initialLoginState, action: LoginAction<any>): LoginState => {
  switch (action.type) {
    case LoginActions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case LoginActions.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LoginActions.SET_IS_BUTTON_DISABLED:
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case LoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload,
        isError: false,
      };
    case LoginActions.LOGIN_FAILED:
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case LoginActions.SET_IS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
