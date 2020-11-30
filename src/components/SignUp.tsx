import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { LOGIN, ROOT } from '../navigation/constants';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { useLoginStyles } from '../styles';
import { SignUpActionDispatchers, SignUpState } from '../store/signUp';

type Props = {
  state: SignUpState;
  actions: SignUpActionDispatchers;
};

const SignUp: React.FC<Props> = ({ state, actions }) => {
  const classes = useLoginStyles();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    actions.signUpUser(username, password);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSignUp();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (state.message === 'Signup successful') {
      actions.setShowSignUp(false);
    }
  }, [state.message]);

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='Pokedex App' />
        <CardContent>
          <div>
            <TextField
              error={state.error}
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
              error={state.error}
              fullWidth
              id='password'
              type='password'
              label='Password'
              placeholder='Password'
              margin='normal'
              helperText={state.message}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant='contained' size='large' color='secondary' className={classes.loginBtn} onClick={handleSignUp}>
            Sign Up
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default SignUp;
