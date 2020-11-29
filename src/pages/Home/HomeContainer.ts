import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../../store/app/appActions';
import Home from './Home';

const mapStateToProps = (state: any) => ({
  state: state.app,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
