import { combineReducers } from 'redux';
import booksReducer from './books';
import filtersReducer from './filter';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

export default rootReducer;
