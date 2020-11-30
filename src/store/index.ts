import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './app';
import { loginReducer } from './login';
import { signUpReducer } from './signUp';
import { pokemonReducer } from './pokemon';
import { pokedexReducer } from './pokedex';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  signUp: signUpReducer,
  pokemon: pokemonReducer,
  pokedex: pokedexReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
