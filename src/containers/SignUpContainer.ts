import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signUpActions from '../store/signUp/signUpActions';
import SignUp from '../components/SignUp';

const mapStateToProps = (state: any) => ({
  state: state.signUp,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(signUpActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
