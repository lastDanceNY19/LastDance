import React from 'react';
import { render } from 'react-dom';
import App from './App';

const { Provider } = require('react-redux');
import reducer from './reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './style.css';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
