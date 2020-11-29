import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../store/pokemon/pokemonActions';
import PokemonCatalog from '../components/PokemonCatalog';

const mapStateToProps = (state: any) => ({
  state: state.pokemon,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(pokemonActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCatalog);
