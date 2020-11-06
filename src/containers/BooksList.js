import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { books.map(book => (
          <tr key={book.id}>
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              handleRemoveBook={handleRemoveBook}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
