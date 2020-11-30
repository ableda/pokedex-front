// Reference: https://material-ui.com/components/tables/

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import { PokemonActionDispatchers, PokemonState } from '../store/pokemon';
import { StyledTableCell, StyledTableRow, usePokemonCatalogStyles } from '../styles/pokemonCatalogStyles';
import { getComparator, Order, stableSort } from '../utils/tableSort';
import { Button } from '@material-ui/core';
import { Pokemon } from '../services';

interface Data {
  name: string;
  type: string[];
  details: string;
  actions: any;
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

const headCells: HeadCell[] = [
  { id: 'name', label: 'Pokemon' },
  { id: 'type', label: 'Type' },
  { id: 'details', label: 'Details' },
  { id: 'actions', label: 'Actions' },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof usePokemonCatalogStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <StyledTableCell key={headCell.id} align='center' sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              classes={{
                active: classes.tableSortLabel,
                icon: classes.tableSortLabel,
              }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

type Props = {
  state: PokemonState;
  actions: PokemonActionDispatchers;
};

const PokemonCatalog: React.FC<Props> = ({ state, actions }) => {
  const classes = usePokemonCatalogStyles();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    actions.resetCurrentPokemon();
    actions.fetchPokemon();
  }, []);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, state.pokemons.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table stickyHeader className={classes.table} aria-labelledby='tableTitle' size='medium' aria-label='pokemon table'>
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={state.pokemons.length}
            />
            <TableBody>
              {stableSort<any>(state.pokemons, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pokemon, index) => {
                  return (
                    <StyledTableRow tabIndex={-1} key={pokemon._id}>
                      <StyledTableCell align='left'>{pokemon.name}</StyledTableCell>
                      <StyledTableCell align='left'>{convertPokemonTypesToCommaSeparated(pokemon.type)}</StyledTableCell>
                      <StyledTableCell align='left'>
                        <Link to={{ pathname: `pokemon/${pokemon._id}` }}>View</Link>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
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
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={state.pokemons.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default PokemonCatalog;
