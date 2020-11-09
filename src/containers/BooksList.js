import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleChangeFilter = filter => {
    changeFilter(filter);
  };

  const filterValue = useSelector(state => state.filter);
  let filteredBooks;
  if (filterValue === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter(x => x.category === filterValue);
  }

  return (
    <>
      <CategoryFilter handleFilterChange={handleChangeFilter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { filteredBooks.map(book => (
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
    </>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
