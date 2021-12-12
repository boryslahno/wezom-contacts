import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from "./rootReducer";
import { middleware } from './middleware';


const store = createStore(rootReducer, compose(
   applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export { store };
