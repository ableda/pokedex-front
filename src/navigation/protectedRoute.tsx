import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getSession } from '../utils/getSession';
import { LOGIN } from './constants';

interface ProtectedRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({ component: Component, ...props }: ProtectedRouteProps) => {
  console.log('Getting session: ', getSession());
  return (
    <Route
      {...props}
      render={props =>
        getSession() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
