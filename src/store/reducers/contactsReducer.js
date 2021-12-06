import { FETCH_CONTACTS } from '../../types/types';

const initialState = {
   contacts: []
}

const contactsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CONTACTS:
         return { ...state, contacts: action.payload }
      default:
         return state;
   }
}

export { contactsReducer };