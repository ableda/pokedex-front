import { LoginAction, LoginActions } from './loginTypes';

export const setUsername = (username: string): LoginAction<string> => ({ type: LoginActions.SET_USERNAME, payload: username });

export const setPassword = (password: string): LoginAction<string> => ({ type: LoginActions.SET_PASSWORD, payload: password });

export const setIsButtonDisabled = (setDisable: boolean): LoginAction<boolean> => ({
  type: LoginActions.SET_IS_BUTTON_DISABLED,
  payload: setDisable,
});

export const loginSuccess = (loginSuccess: string): LoginAction<string> => ({
  type: LoginActions.LOGIN_SUCCESS,
  payload: loginSuccess,
});

export const loginFailed = (loginFailed: string): LoginAction<string> => ({
  type: LoginActions.LOGIN_FAILED,
  payload: loginFailed,
});

export const setError = (setError: boolean): LoginAction<boolean> => ({ type: LoginActions.SET_IS_ERROR, payload: setError });
