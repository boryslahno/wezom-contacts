import { openModal, setAuthorized, fetchPersonalData } from '../../../store/actions/auth';
import { View } from './view';
import { connect } from 'react-redux';


const mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuthorized,
      name: state.auth.personalInformation.name,
      avatar: state.auth.personalInformation.picture?.large,
   }
};

const mapDispatchToProps = {
   openModal,
   setAuthorized,
   fetchPersonalData,
}


const Header = connect(mapStateToProps, mapDispatchToProps)(View);

export { Header };