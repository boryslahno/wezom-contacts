import { types } from "./types";

const initialState = {
   filteredContacts: [],
   searchTerm: '',
   gender: null,
   nationality: [],
   isCreator: false,
   clear: true,
}

export const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.FILTER_SET_CONTACTS:
         return { ...state, filteredContacts: action.payload };
      case types.FILTER_SET_SEARCH_TERM:
         return { ...state, searchTerm: action.payload }
      case types.FILTER_SET_GENDER:
         return { ...state, gender: action.payload }
      case types.FILTER_SET_NATIONALITY:
         return { ...state, nationality: action.payload }
      case types.FILTER_SET_ISCREATOR:
         return { ...state, isCreator: action.payload }
      case types.FILTER_CLEAR:
         return { ...state, clear: action.payload }
      default:
         return state;
   }
}