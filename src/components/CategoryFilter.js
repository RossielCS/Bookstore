import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterCategories = [
    'Action', 'Biography', 'History',
    'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="Category-filter">
      <div>
        <label htmlFor="filter">
          <span>FILTER CATEGORIES</span>
          <select onChange={e => handleFilterChange(e.target.value)}>
            <option key="All" value="All" defaultValue>All</option>
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
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
