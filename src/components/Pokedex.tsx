import React, { useEffect } from 'react';
import { PokedexActionDispatchers, PokedexState } from '../store/pokedex';
import PokemonCard from './PokemonCard';
import { userPokedexStyles } from '../styles/pokedexStyles';
import { Pokemon } from '../services';
import { Link } from 'react-router-dom';
import { POKEMON } from '../navigation/constants';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type Props = {
  state: { pokedex: PokedexState; userId: string; token: string };
  actions: PokedexActionDispatchers;
};

const Pokedex: React.FC<Props> = ({ state, actions }) => {
  const classes = userPokedexStyles();

  const [pokemonRows, setPokemonRows] = React.useState([]);

  useEffect(() => {
    actions.fetchUserPokedex(state.userId, state.token);
  }, []);

  useEffect(() => {
    if (state.pokedex && state.pokedex.userPokedex && state.pokedex.userPokedex.pokemons.length) {
      const userPokemons = [...state.pokedex.userPokedex.pokemons];

      const pokemonRows: any = userPokemons
        .map((pokemon, index) => {
          return index % 3 === 0 ? userPokemons.slice(index, index + 3) : null;
        })
        .filter(pokemon => pokemon);

      setPokemonRows(pokemonRows);
    }
  }, [state.pokedex]);

  if (!state.pokedex.userPokedex?.pokemons.length) {
    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              No pokemons in your pokedex yet
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={POKEMON}> Add Pokemons </Link>
          </CardActions>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {pokemonRows.map((pokemonArray: Pokemon[], index) => (
        <Grid container spacing={3} direction='row' justify='center' alignItems='center' key={`pokemon-grid-${index}`}>
          {pokemonArray.map(pokemon => (
            <Grid item xs={3} key={pokemon._id}>
              <PokemonCard pokemon={pokemon}></PokemonCard>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default Pokedex;
