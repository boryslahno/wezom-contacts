import { combineReducers } from 'redux'
import { authReducer } from './auth/authReducer';
import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';
import { connectRouter } from 'connected-react-router';
import { history } from './middleware';

export const rootReducer = combineReducers({
   router: connectRouter(history),
   auth: authReducer,
   contacts: contactsReducer,
   filter: filterReducer,
});