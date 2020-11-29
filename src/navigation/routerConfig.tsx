import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import { ROOT, LOGIN, POKEMON } from './constants';

import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../pages/Home/HomeContainer';
import PokemonViewContainer from '../containers/PokemonViewContainer';
import PokemonCatalogContainer from '../containers/PokemonCatalogContainer';

const RouterConfig = () => {
  return (
    <Switch>
      <Route path={LOGIN}>
        <LoginContainer />
      </Route>
      <ProtectedRoute path={ROOT} component={HomeContainer} />
    </Switch>
  );
};

export default RouterConfig;
