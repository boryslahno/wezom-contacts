import { View } from './view';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuthorized,
   }
}

const mapDispatchToProps = null;

const Switch = connect(mapStateToProps, mapDispatchToProps)(View);

export { Switch };