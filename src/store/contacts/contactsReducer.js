import { types } from './types';

const initialState = {
   contacts: [],
   isLoading: false,
}

const contactsReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.CONTACTS_FETCH_CONTACTS:
         return { ...state, contacts: action.payload }
      case types.CONTACTS_START_FETCHING:
         return { ...state, isLoading: true }
      case types.CONTACTS_STOP_FETCHING:
         return { ...state, isLoading: false }
      default:
         return state;
   }
}

export { contactsReducer };