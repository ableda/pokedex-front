import { AppState, initialState } from './appState';
import { AppAction, AppActions } from './appTypes';

export const appReducer = (state: AppState = initialState, action: AppAction<any>): AppState => {
  switch (action.type) {
    case AppActions.SET_SYSTEM_ERROR:
      return {
        ...state,
        systemError: action.payload,
      };
    default:
      return state;
  }
};
