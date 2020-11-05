import React from 'react';
import BookForm from '../containers/BooksForm';
import BookList from '../containers/BooksList';
import '../assets/stylesheet/App.css';

const App = () => (
  <div className="App">
    <BookForm />
    <BookList />
  </div>
);

export default App;
