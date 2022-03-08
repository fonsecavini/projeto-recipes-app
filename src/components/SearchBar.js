import React, { useState } from 'react';
import propTypes from 'prop-types';
import { fetchIgredient,
  fetchName,
  fetchFirstLetter,
  fetchCocktailIgredient,
  fetchCocktailName,
  fetchCocktailFirstLetter } from '../services/fetchApi';
// { useState }
function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const { history } = props;

  const handleSearch = ({ target: { value } }) => {
    setSearchInput(value);
  };

  const handleNameSearch = ({ target: { value } }) => {
    setNameSearch(value);
  };

  const handleClick = () => {
    if (history.location.pathname === '/explore/foods') {
      if (searchInput === 'Ingredient') {
        fetchIgredient(nameSearch).then((response) => console.log(response));
      }
      if (searchInput === 'Name') {
        fetchName(nameSearch).then((response) => console.log(response));
      }
      if (searchInput === 'FirstLetter') {
        fetchFirstLetter(nameSearch).then((response) => console.log(response))
          .catch((err) => global.alert(err));
      }
    }
    if (history.location.pathname === '/explore/drinks') {
      if (searchInput === 'Ingredient') {
        fetchCocktailIgredient(nameSearch).then((response) => console.log(response));
      }
      if (searchInput === 'Name') {
        fetchCocktailName(nameSearch).then((response) => console.log(response));
      }
      if (searchInput === 'FirstLetter') {
        fetchCocktailFirstLetter(nameSearch).then((response) => console.log(response))
          .catch((err) => global.alert(err));
      }
    }
  };

  return (

    <div>
      {console.log(history.location)}
      <input
        type="text"
        onChange={ handleNameSearch }
      />
      <div>
        <input
          name="searchInput"
          id="ingredientSearch"
          type="radio"
          value="Ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleSearch }
        />
        <div
          id="ingredientSearch"
        >
          Ingredient
        </div>

        <input
          name="searchInput"
          id="nameSearch"
          type="radio"
          value="Name"
          data-testid="name-search-radio"
          onChange={ handleSearch }

        />
        <div
          id="nameSearch"
        >
          Name
        </div>

        <input
          name="searchInput"
          id="firstLetterSearch"
          type="radio"
          value="FirstLetter"
          data-testid="first-letter-search-radio"
          onChange={ handleSearch }

        />
        <div
          id="firstLetterSearch"
        >
          FirstLetter
        </div>
      </div>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
        {' '}

      </button>
    </div>
  );
}

SearchBar.propTypes = {
  history: propTypes.func.isRequired,
};

export default SearchBar;
