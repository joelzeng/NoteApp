import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

import uuid from 'uuid';

import { Provider } from 'react-redux';
import Store from './store/store';

const initialState = {
  notes:[
      {
        id: uuid.v4(),
        title: 'MyNote',
        content: 'Example of content'
      },
      {
        id: uuid.v4(),
        title: 'OtherNote',
        content: 'Extra Examples.... '
      }
    ]
};

const store = Store(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
