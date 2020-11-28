import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROOT } from './constants';

import LoginContainer from '../containers/LoginContainer';

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path={ROOT} component={LoginContainer} />
    </Switch>
  );
};

export default RouterConfig;
