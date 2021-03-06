import React from 'react';
import Header from './Header';
import BookForm from '../containers/BooksForm';
import BookList from '../containers/BooksList';

const App = () => (
  <div className="App">
    <Header />
    <BookList />
    <BookForm />
  </div>
);

export default App;
