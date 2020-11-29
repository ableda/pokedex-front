import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import PokemonCatalogContainer from '../containers/PokemonCatalogContainer';
import PokemonViewContainer from '../containers/PokemonViewContainer';

import { PokemonActionDispatchers, PokemonState } from '../store/pokemon';

type Props = {
  state: PokemonState;
  actions: PokemonActionDispatchers;
};

const Pokemon: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path='/pokemon' component={PokemonCatalogContainer} />
      <Route path='/pokemon/:id' component={PokemonViewContainer} />
    </Switch>
  );
};

export default Pokemon;
