import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

const history = createBrowserHistory({
   basename: '/wezom-contacts/'
})

const myRouterMiddleware = routerMiddleware(history);

const middleware = [thunk, myRouterMiddleware];

export { middleware, history };