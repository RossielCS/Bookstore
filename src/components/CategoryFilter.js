import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterCategories = [
    'Action', 'Biography', 'History',
    'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <label htmlFor="filter">
      Filter Categories
      <select onChange={e => handleFilterChange(e)}>
        <option key="All" value="All" selected>All</option>
        {filterCategories.map(
          category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ),
        )}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
