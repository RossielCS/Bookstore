import React from 'react';

const categories = [
  'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title
      <input type="text" id="title" />
    </label>
    <label htmlFor="title">
      Categories
      <select>
        {categories.map(
          category => <option key={category} value={category}>{category}</option>,
        )}
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default BooksForm;
