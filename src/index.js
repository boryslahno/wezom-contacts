import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { history } from './store/middleware';
import './assets/styles/index.scss';
import 'antd/dist/antd.css';
import { RoutesSwitch } from './routes';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <ReduxProvider store={store}>
    <HashRouter history={history}>
      <RoutesSwitch />
    </HashRouter>
  </ReduxProvider>,
  document.getElementById('root')
);

