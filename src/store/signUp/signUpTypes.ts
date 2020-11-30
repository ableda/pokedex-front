export enum SignUpActions {
  SET_SIGN_UP_MESSAGE = 'setSignUpMessage',
  SET_SIGN_UP_ERROR = 'setSignUpError',
  SET_SHOW_SIGN_UP = 'setShowSignUp',
}

export interface SignUpAction<T> {
  type: SignUpActions;
  payload: T;
}

export interface SignUpActionDispatchers {
  signUpUser: (username: string, password: string) => any;
  setShowSignUp: (show: boolean) => SignUpAction<boolean>;
}
