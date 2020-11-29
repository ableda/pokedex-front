export enum LoginActions {
  SET_USERNAME = 'setUsername',
  SET_PASSWORD = 'setPassword',
  SET_IS_BUTTON_DISABLED = 'setIsButtonDisabled',
  LOGIN_SUCCESS = 'loginSuccess',
  LOGIN_FAILED = 'loginFailed',
  SET_IS_ERROR = 'setIsError',
}

export interface LoginAction<T> {
  type: LoginActions;
  payload: T;
}

export interface LoginActionDispatchers {
  setUsername: (username: string) => LoginAction<string>;
  setPassword: (password: string) => LoginAction<string>;
  setIsButtonDisabled: (setDisable: boolean) => LoginAction<boolean>;
  loginUser: (username: string, password: string) => Promise<any>;
  loginFailed: (loginFailed: string) => LoginAction<string>;
  setError: (setError: boolean) => LoginAction<boolean>;
}
