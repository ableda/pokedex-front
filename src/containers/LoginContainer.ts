import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../store/login/loginActions';
import Login from '../components/Login';

const mapStateToProps = (state: any) => ({
  state: state.login,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
