import { randomIntegerInRange } from '../../utils/random';
import { modifyDataForView } from '../../utils/modifyDataForView';
import { types } from './types';

export const contactsActions = Object.freeze({

   startFetching() {
      return {
         type: types.CONTACTS_START_FETCHING,
      }
   },
   stopFetching() {
      return {
         type: types.CONTACTS_STOP_FETCHING,
      }
   },

   //Async
   fetchContacts: () => async dispatch => {
      dispatch(contactsActions.startFetching());
      try {
         const contactsCount = randomIntegerInRange(100, 1500);
         const response = await fetch(`https://randomuser.me/api/?seed=wezom-react-redux-test&results=${contactsCount}`);
         const contacts = await response.json();

         dispatch({ type: types.CONTACTS_FETCH_CONTACTS, payload: modifyDataForView(contacts.results) });
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(contactsActions.stopFetching());
      }
   }
})