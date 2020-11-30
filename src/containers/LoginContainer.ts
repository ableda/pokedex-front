import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../store/login/loginActions';
import * as signUpActions from '../store/signUp/signUpActions';
import Login from '../components/Login';

const mapStateToProps = (state: any) => ({
  state: {
    ...state.login,
    showSignUp: state.signUp.showSignUp,
  },
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(loginActions, dispatch),
  signUpActions: bindActionCreators(signUpActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
