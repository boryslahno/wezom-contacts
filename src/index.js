import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { history } from './store/middleware';
import './assets/styles/index.scss';
import 'antd/dist/antd.css';


ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter history={history}>
      <Root />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);

