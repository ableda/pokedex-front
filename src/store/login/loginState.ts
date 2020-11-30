export interface LoginState {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  userId: string;
  token: string;
}

export const initialLoginState: LoginState = {
  username: '',
  password: '',
  isButtonDisabled: false,
  helperText: '',
  isError: false,
  userId: '',
  token: '',
};
