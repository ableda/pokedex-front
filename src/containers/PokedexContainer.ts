import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from '../store/pokedex/pokedexActions';
import Pokedex from '../components/Pokedex';

const mapStateToProps = (state: any) => ({
  state: {
    pokedex: state.pokedex,
    userId: state.login.userId,
    token: state.login.token,
  },
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(pokedexActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
