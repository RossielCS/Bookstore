import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import idGenerator from './auxiliaries';
import './assets/stylesheet/index.css';

const initialState = {
  books: [
    { id: idGenerator(), title: 'Frankenstein', category: 'Horror' },
    { id: idGenerator(), title: 'Dracula', category: 'Horror' },
    { id: idGenerator(), title: 'Treasure Island', category: 'Action' },
    { id: idGenerator(), title: 'Dune', category: 'Sci-Fi' },
  ],
};

const store = createStore(rootReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
