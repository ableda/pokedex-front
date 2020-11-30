import { createStyles, makeStyles, TableCell, TableRow, Theme, withStyles } from '@material-ui/core';

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

export const StyledTableCell = withStyles((theme: Theme) =>
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

export const usePokemonCatalogStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      width: '75%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableSortLabel: {
      color: theme.palette.common.white + ' !important',
      '&:hover, &:focus, &:active': {
        color: theme.palette.common.white,
      },
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);
