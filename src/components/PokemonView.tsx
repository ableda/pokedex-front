import React, { useEffect } from 'react';

import { Button, Grid, List, ListItem, makeStyles, Paper, Typography } from '@material-ui/core';

import { usePokemonViewStyles } from '../styles';
import { PokemonActionDispatchers, PokemonState } from '../store/pokemon';
import { Link } from 'react-router-dom';

type Props = {
  state: PokemonState;
  actions: PokemonActionDispatchers;
  match: { params: { id: string } };
};

const PokemonView: React.FC<Props> = ({ state, actions, match }) => {
  const classes = usePokemonViewStyles();

  useEffect(() => {
    actions.fetchPokemonById(match.params.id);
  }, []);

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <h1> {state.currentPokemon?.name}</h1>
        <div className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' className={classes.listTitle}>
                Types:
              </Typography>
              <div>
                <List aria-label='pokemon types'>
                  {state.currentPokemon?.type.map((type: string) => {
                    return <ListItem key={type}> {type} </ListItem>;
                  })}
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' className={classes.listTitle}>
                Base:
              </Typography>
              <div>
                <List aria-label='pokemon types'>
                  <ListItem> Attack: {state.currentPokemon?.base?.Attack}</ListItem>
                  <ListItem> Defense: {state.currentPokemon?.base?.Defense}</ListItem>
                  <ListItem> HP: {state.currentPokemon?.base?.HP}</ListItem>
                  <ListItem> SpAttack: {state.currentPokemon?.base?.SpAttack}</ListItem>
                  <ListItem> SpDefense: {state.currentPokemon?.base?.SpDefense}</ListItem>
                  <ListItem> Speed: {state.currentPokemon?.base?.Speed}</ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button variant='contained' color='primary'>
                <Link to='/pokemon'>Back</Link>
              </Button>
              <Button variant='contained' color='primary'>
                {' '}
                Add to Pokedex{' '}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default PokemonView;
