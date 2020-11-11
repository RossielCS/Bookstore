import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const book = { id, title, category };
  return (
    <>
      <div className="book-info">
        <p className="info-category">{category}</p>
        <h2>{title}</h2>
        <p className="info-author">Author</p>
        <ul>
          <li className="info-op book-border">Comments</li>
          <li className="book-border">
            <button className="info-op" type="button" onClick={() => handleRemoveBook(book)}>
              Remove
            </button>
          </li>
          <li className="info-op">Edit</li>
        </ul>
      </div>
      <div className="book-percentage">
        <div className="percentage-circle" />
        <div className="percentage-number">
          <h3>2%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-progress">
        <p className="progress-chapter">CURRENT CHAPTER</p>
        <p className="progress-number-chapter">Chapter 1</p>
        <button type="button" className="progress-button">
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
