import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ROOT } from '../navigation/constants';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { useLoginStyles } from '../styles';
import { LoginActionDispatchers, LoginState } from '../store/login';
import { isAuthenticated } from '../utils/isAuthenticated';

import SignUpContainer from '../containers/SignUpContainer';
import { SignUpActionDispatchers } from '../store/signUp';

type Props = {
  state: LoginState & { showSignUp: boolean };
  actions: LoginActionDispatchers;
  signUpActions: SignUpActionDispatchers;
};

const Login: React.FC<Props> = ({ state, actions, signUpActions }) => {
  const classes = useLoginStyles();

  const handleLogin = () => {
    actions.loginUser(state.username, state.password);
  };

  const handleSignUp = () => {
    signUpActions.setShowSignUp(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    actions.setUsername(event.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    actions.setPassword(event.target.value);
  };

  if (state.userId !== '' && state.userId.length && isAuthenticated()) {
    return <Redirect to={ROOT} />;
  }

  if (state.showSignUp) {
    return <SignUpContainer></SignUpContainer>;
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='Pokedex App' />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id='username'
              type='email'
              label='Username'
              placeholder='Username'
              margin='normal'
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id='password'
              type='password'
              label='Password'
              placeholder='Password'
              margin='normal'
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}
          >
            Login
          </Button>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            className={classes.loginBtn}
            onClick={handleSignUp}
            disabled={state.isButtonDisabled}
          >
            SignUp
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
