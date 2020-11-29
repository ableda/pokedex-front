import { AppAction, AppActions } from './appTypes';

export const setSystemError = (isError: boolean): AppAction<boolean> => ({
  type: AppActions.SET_SYSTEM_ERROR,
  payload: isError,
});
