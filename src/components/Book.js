import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
