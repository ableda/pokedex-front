import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';
import { LOGIN } from './constants';

interface ProtectedRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({ component: Component, ...props }: ProtectedRouteProps) => {
  return <Route {...props} render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: LOGIN }} />)} />;
};

export default ProtectedRoute;
