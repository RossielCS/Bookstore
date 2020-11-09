import React from 'react';
import PropTypes from 'prop-types';

const filterCategories = [
  'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => {
  <label htmlFor="filter">
    Filter Categories
    <select onChange={handleFilterChange}>
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
  </label>;
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
