import { OPEN_MODAL, CLOSE_MODAL, FETCH_PERSONAL_DATA, SET_AUTHORIZED } from '../../types/types';

const intitialState = {
   isAuthorized: false,
   isModalOpen: false,
   personalInformation: {},
}

const authReducer = (state = intitialState, action) => {
   switch (action.type) {
      case OPEN_MODAL:
         return { ...state, isModalOpen: true }
      case CLOSE_MODAL:
         return { ...state, isModalOpen: false }
      case SET_AUTHORIZED:
         return { ...state, isAuthorized: action.payload }
      case FETCH_PERSONAL_DATA:
         return { ...state, personalInformation: action.payload }
      default:
         return state;
   }
}

export { authReducer };