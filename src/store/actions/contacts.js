import { FETCH_CONTACTS } from "../../types/types";


const fetchContacts = () =>
   async dispatch => {

      const response = await fetch('https://randomuser.me/api/?results=100');
      const contacts = await response.json();

      dispatch({ type: FETCH_CONTACTS, payload: contacts.results });
   }

export { fetchContacts };