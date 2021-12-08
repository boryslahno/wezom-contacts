import { FETCH_CONTACTS } from "../../types/types";
import { randomIntegerInRange } from '../../utils/random';

const fetchContacts = () =>
   async dispatch => {

      const contactsCount = randomIntegerInRange(100, 1500);
      const response = await fetch(`https://randomuser.me/api/?seed=wezom-react-redux-test&results=${contactsCount}`);
      const contacts = await response.json();

      dispatch({ type: FETCH_CONTACTS, payload: contacts.results });
   }

export { fetchContacts };