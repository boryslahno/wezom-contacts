import { combineReducers } from 'redux'
import { authReducer } from './auth/authReducer';
import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';

export const rootReducer = combineReducers({
   auth: authReducer,
   contacts: contactsReducer,
   filter: filterReducer,
});