import { View } from './view';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuthorized,
   }
}

const mapDispatchToProps = null;

const NavBar = connect(mapStateToProps, mapDispatchToProps)(View);

export { NavBar };