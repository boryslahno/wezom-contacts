import { combineReducers } from 'redux'
import { authReducer } from './auth/authReducer';
import { contactsReducer } from './contacts/contactsReducer';

export const rootReducer = combineReducers({
   auth: authReducer,
   contacts: contactsReducer,
});