import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const book = { id, title, category };
  return (
    <>
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h2>{title}</h2>
        <p className="book-author">Author</p>
        <ul>
          <li className="book-info-op book-border">Comments</li>
          <li className="book-border">
            <button className="book-info-op" type="button" onClick={() => handleRemoveBook(book)}>
              Remove
            </button>
          </li>
          <li className="book-info-op">Edit</li>
        </ul>
      </div>
      <div className="book-percentage">
        <div className="book-percentage-circle" />
        <div className="book-percentage-number">
          <h3>2%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-progress">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 1</p>
        <button type="button">
          UPDATE PROGRESS
        </button>
      </div>
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
