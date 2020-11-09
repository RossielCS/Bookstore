import { combineReducers } from 'redux';
import booksReducer from './books';
import filtersReducer from './filter';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filtersReducer,
});

export default rootReducer;
