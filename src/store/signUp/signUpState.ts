export interface SignUpState {
  error: boolean;
  message: string | null;
  showSignUp: boolean;
}

export const initialSignUpState: SignUpState = {
  error: false,
  message: null,
  showSignUp: false,
};
