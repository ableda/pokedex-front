import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { useLoginStyles } from '../styles';
import { LoginActionDispatchers, LoginState } from '../store/login';

type Props = {
  state: LoginState;
  actions: LoginActionDispatchers;
};

const Login: React.FC<Props> = ({ state, actions }) => {
  const classes = useLoginStyles();

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      actions.loginSuccess('Login Successfull');
    } else {
      actions.loginFailed('Incorrect username or password');
    }
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
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
