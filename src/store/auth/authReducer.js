import { types } from './types';

const intitialState = {
   isModalOpen: false,
   personalInformation: {},
   isLoading: false,
   isAuthorized: false,
}

const authReducer = (state = intitialState, action) => {
   switch (action.type) {
      case types.AUTH_OPEN_MODAL:
         return { ...state, isModalOpen: true }
      case types.AUTH_CLOSE_MODAL:
         return { ...state, isModalOpen: false }
      case types.AUTH_SET_AUTHORIZED:
         return { ...state, isAuthorized: action.payload }
      case types.AUTH_FETCH_DATA:
         return { ...state, personalInformation: action.payload }
      case types.AUTH_START_FETCHING:
         return { ...state, isLoading: true }
      case types.AUTH_STOP_FETCHING:
         return { ...state, isLoading: false }
      default:
         return state;
   }
}

export { authReducer };