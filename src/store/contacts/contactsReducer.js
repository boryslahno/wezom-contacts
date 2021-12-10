import { types } from './types';

const initialState = {
   contacts: [],
   isLoading: false,
   tableCurrentPage: 1,
   tablePageSize: 10,
   tiledCurrentPage: 1,
   tiledPageSize: 6
}

const contactsReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.CONTACTS_FETCH_CONTACTS:
         return { ...state, contacts: action.payload }
      case types.CONTACTS_START_FETCHING:
         return { ...state, isLoading: true }
      case types.CONTACTS_STOP_FETCHING:
         return { ...state, isLoading: false }
      case types.CONTACTS_SET_TABLE_CURRENT_PAGE:
         return { ...state, tableCurrentPage: action.payload }
      case types.CONTACTS_SET_TABLE_PAGE_SIZE:
         return { ...state, tablePageSize: action.payload }
      case types.CONTACTS_SET_TILED_CURRENT_PAGE:
         return { ...state, tiledCurrentPage: action.payload }
      case types.CONTACTS_SET_TILED_PAGE_SIZE:
         return { ...state, tiledPageSize: action.payload }
      default:
         return state;
   }
}

export { contactsReducer };