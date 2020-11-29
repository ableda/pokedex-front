import React, { useEffect } from 'react';
import { PokemonActionDispatchers, PokemonState } from '../store/pokemon';

import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Pokemon } from '../services';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { POKEMON } from '../navigation/constants';

type Props = {
  state: PokemonState;
  actions: PokemonActionDispatchers;
};

const useStyles = makeStyles({
  catalog: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    width: '75%',
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const PokemonCatalog: React.FC<Props> = ({ state, actions }) => {
  const classes = useStyles();

  useEffect(() => {
    actions.resetCurrentPokemon();
    actions.fetchPokemon();
  }, []);

  const convertPokemonTypesToCommaSeparated = (pokemonTypes: string[]): string => {
    return pokemonTypes.reduce((typeStrings: string, pokemonType: string, index: number) => {
      if (index < pokemonTypes.length - 1) {
        return typeStrings + pokemonType + ', ';
      }
      return typeStrings + pokemonType;
    }, '');
  };

  const addPokemonToPokedex = (pokemon: Pokemon): any => {
    console.log(pokemon);
  };

  return (
    <div className={classes.catalog}>
      <div className={classes.table}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label='pokemon table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Pokemon</StyledTableCell>
                <StyledTableCell align='right'>Type</StyledTableCell>
                <StyledTableCell align='right'>Details</StyledTableCell>
                <StyledTableCell align='right'>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.pokemons.map((pokemon: Pokemon) => (
                <StyledTableRow key={pokemon._id}>
                  <StyledTableCell component='th' scope='row'>
                    {pokemon.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{convertPokemonTypesToCommaSeparated(pokemon.type)}</StyledTableCell>
                  <StyledTableCell align='right'>
                    <Link to={{ pathname: `${POKEMON}/${pokemon._id}` }}>View</Link>
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Button
                      variant='outlined'
                      color='primary'
                      onClick={() => {
                        addPokemonToPokedex(pokemon);
                      }}
                    >
                      Add to Pokedex
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PokemonCatalog;
