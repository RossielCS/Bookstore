import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const book = { id, title, category };
  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => handleRemoveBook(book)}>
          Remove Book
        </button>
      </td>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
