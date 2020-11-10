import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const book = { id, title, category };
  return (
    <div>
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h2>{title}</h2>
        <p className="book-author">Author</p>
        <ul>
          <li>Comments</li>
          <li>
            <button type="button" onClick={() => handleRemoveBook(book)}>
              Remove
            </button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-percentage">
        <img src="" alt="percentage" />
        <h3>2%</h3>
        <p>Completed</p>
      </div>
      <div className="book-progress">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 1</p>
        <button type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
