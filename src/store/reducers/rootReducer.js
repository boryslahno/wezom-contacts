import { combineReducers } from 'redux'
import { authReducer } from './authReducer';
import { contactsReducer } from './contactsReducer';

export const rootReducer = combineReducers({
   auth: authReducer,
   contacts: contactsReducer,
});