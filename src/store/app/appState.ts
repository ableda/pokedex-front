export interface AppState {
  userId: string;
  isLoggedIn: boolean;
  systemError: boolean;
}

export const initialState: AppState = {
  userId: '',
  isLoggedIn: false,
  systemError: false,
};
