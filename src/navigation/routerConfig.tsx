import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import { ROOT, LOGIN } from './constants';

import HomeContainer from '../pages/Home/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path={LOGIN}>
        <LoginContainer />
      </Route>
      <ProtectedRoute path={ROOT} component={HomeContainer} />
    </Switch>
  );
};

export default RouterConfig;
