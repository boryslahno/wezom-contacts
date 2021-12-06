import { CLOSE_MODAL, FETCH_PERSONAL_DATA, OPEN_MODAL, SET_AUTHORIZED } from "../../types/types"

export const openModal = () => {
   return {
      type: OPEN_MODAL
   }
}

export const closeModal = () => {
   return {
      type: CLOSE_MODAL
   }
}

export const setAuthorized = (isAuth) => {
   return {
      type: SET_AUTHORIZED,
      payload: isAuth,
   }
}

export const fetchPersonalData = () => {
   return async dispatch => {
      const user = JSON.parse(localStorage.getItem('auth'));
      const response = await fetch(`https://randomuser.me/api/?seed=${user.profileSeedKey}`);
      const personalData = await response.json()
      dispatch({ type: FETCH_PERSONAL_DATA, payload: personalData.results[0] });
   }
}