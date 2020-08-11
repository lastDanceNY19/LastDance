import React from 'react';
import { render } from 'react-dom';
import App from './App';

const { Provider } = require('react-redux');
import reducer from './reducers/reducer';
import { createStore } from 'redux'
import "./style.css";

const store = createStore(
  reducer
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));