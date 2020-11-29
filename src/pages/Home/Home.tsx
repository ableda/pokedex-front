import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useHomeStyles } from '../../styles';
import { Link, Switch, Route } from 'react-router-dom';
import { POKEMON } from '../../navigation/constants';

import Pokemon from '../../components/Pokemon';

const Home = () => {
  const classes = useHomeStyles();

  return (
    <div className={classes.home}>
      <AppBar position='static'>
        <Toolbar>
          <Link to={{ pathname: `/pokedex` }}> Pokedex </Link>
          <Typography variant='h6' className={classes.title}>
            Pokedex App
          </Typography>
          <Link to={{ pathname: `${POKEMON}` }}> Pokemon </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path='/pokemon' component={Pokemon} />
      </Switch>
    </div>
  );
};

export default Home;
