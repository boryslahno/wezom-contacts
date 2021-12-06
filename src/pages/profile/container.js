import { View } from './view';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      profileData: state.auth.personalInformation,
   }
}

const mapDispatchToProps = null;

const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(View);

export { ProfilePage };