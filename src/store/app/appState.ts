export interface AppState {
  userId: string;
  isLoggedIn: boolean;
}

export const initialState: AppState = {
  userId: '',
  isLoggedIn: false,
};
