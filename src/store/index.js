import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from "./rootReducer";
import { middleware, composeEnhancers } from './middleware';


const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(...middleware))
);

export { store };
