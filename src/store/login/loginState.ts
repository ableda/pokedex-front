export interface LoginState {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
}

export const initialLoginState: LoginState = {
  username: 'alex que tal',
  password: '',
  isButtonDisabled: false,
  helperText: '',
  isError: false,
};
