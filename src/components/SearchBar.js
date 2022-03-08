import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
      />
      <input
        type="radio"
        data-testid="ingredient-search-radio"
      />
      <input
        type="radio"
        data-testid="name-search-radio"
      />
      <input
        type="radio"
        data-testid="first-letter-search-radio"
      />
    </div>
  );
}

export default SearchBar;
