import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => (
  <>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
