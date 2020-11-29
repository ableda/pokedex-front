export enum AppActions {
  SET_SYSTEM_ERROR = 'setSystemError',
}

export interface AppAction<T> {
  type: AppActions;
  payload: T;
}

export interface LoginActionDispatchers {
  setSystemError: (isError: boolean) => AppAction<boolean>;
}
