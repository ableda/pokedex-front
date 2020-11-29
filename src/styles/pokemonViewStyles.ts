import { makeStyles } from '@material-ui/core';
import theme from '../theme';

export const usePokemonViewStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '75%',
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  listTitle: {
    margin: theme.spacing(4, 0, 2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
