import { makeStyles } from '@material-ui/core';

export const useHomeStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  homeHeader: {
    color: '#FFF',
  },
  title: {
    flexGrow: 1,
  },
});
