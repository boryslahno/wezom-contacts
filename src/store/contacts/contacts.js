import { randomIntegerInRange } from '../../utils/random';
import { modifyDataForView } from '../../utils/modifyDataForView';
import { types } from './types';
import { notification } from 'antd';

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
   setTableCurrentPage(currentPage) {
      return {
         type: types.CONTACTS_SET_TABLE_CURRENT_PAGE,
         payload: currentPage,
      }
   },
   setTablePageSize(pageSize) {
      return {
         type: types.CONTACTS_SET_TABLE_PAGE_SIZE,
         payload: pageSize,
      }
   },
   setTiledCurrentPage(currentPage) {
      return {
         type: types.CONTACTS_SET_TILED_CURRENT_PAGE,
         payload: currentPage
      }
   },
   setTiledPageSize(pageSize) {
      return {
         type: types.CONTACTS_SET_TILED_PAGE_SIZE,
         payload: pageSize
      }
   },
   setSortOrder(order) {
      return {
         type: types.CONTACTS_SET_SORT_ORDER,
         payload: order
      }
   },

   //Async
   fetchContacts: () => async dispatch => {
      dispatch(contactsActions.startFetching());
      try {
         const contactsCount = randomIntegerInRange(100, 1500);
         const response = await fetch(`https://randomuser.me/api/?seed=wezom-react-redux-test&results=${contactsCount}`);
         const contacts = await response.json();
         const contactsModified = modifyDataForView(contacts.results);

         dispatch({ type: types.CONTACTS_FETCH_CONTACTS, payload: contactsModified });
      } catch (error) {
         notification.error({
            message: error.message,
            description: 'Please,try again later',
         })
      } finally {
         dispatch(contactsActions.stopFetching());
      }
   }
})