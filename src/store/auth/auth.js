import { modifyDataForView } from '../../utils/modifyDataForView';
import { types } from './types';

export const authActions = Object.freeze({
   startFetching() {
      return {
         type: types.AUTH_START_FETCHING
      }
   },
   stopFetching() {
      return {
         type: types.AUTH_STOP_FETCHING
      }
   },
   openModal() {
      return {
         type: types.AUTH_OPEN_MODAL
      }
   },
   closeModal() {
      return {
         type: types.AUTH_CLOSE_MODAL
      }
   },
   setAuthorized(isAuth) {
      return {
         type: types.AUTH_SET_AUTHORIZED,
         payload: isAuth,
      }
   },
   //Async
   fetchPersonalData: (seedKey) => async dispatch => {
      dispatch(authActions.startFetching());
      try {
         const response = await fetch(`https://randomuser.me/api/?seed=${seedKey}`);
         const personalData = await response.json()
         dispatch({ type: types.AUTH_FETCH_DATA, payload: modifyDataForView(personalData.results)[0] });
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(authActions.stopFetching());
      }

   }
})