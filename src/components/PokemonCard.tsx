import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Pokemon } from '../services';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          My Pokemon
        </Typography>
        <Typography variant='h5' component='h2'>
          {pokemon.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {pokemon.type.reduce((typeStrings: string, pokemonType: string, index: number) => {
            if (index < pokemon.type.length - 1) {
              return typeStrings + pokemonType + ', ';
            }
            return typeStrings + pokemonType;
          }, '')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>View Details</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
