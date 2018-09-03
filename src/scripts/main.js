
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';
import MessagingService from './MessagingService';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
  	<MessagingService />
  </Provider>,
  document.getElementById('main')
);