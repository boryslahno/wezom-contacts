import { connect } from 'react-redux';
import { View } from './view';
import { fetchContacts } from '../../store/actions/contacts';

const mapStateToProps = state => {
   return {
      contacts: state.contacts.contacts
   }
}

const mapDispatchToProps = {
   fetchContacts,
}

const ContactsPage = connect(mapStateToProps, mapDispatchToProps)(View);

export { ContactsPage };