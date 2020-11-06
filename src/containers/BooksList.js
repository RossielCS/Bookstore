import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    { books.map(book => (
      <tr key={book.id}><Book book={book} /></tr>))}
  </table>;
};

const mapStateToProps = state => ({ books: state });

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
