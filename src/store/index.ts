import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './app';
import { loginReducer } from './login';
import { pokemonReducer } from './pokemon';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  pokemon: pokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
