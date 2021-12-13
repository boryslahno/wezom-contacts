import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { history } from './store/middleware';
import './assets/styles/index.scss';
import 'antd/dist/antd.css';
import { RoutesSwitch } from './routes';

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <RoutesSwitch />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root')
);

