import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchIgredient,
  fetchName,
  fetchFirstLetter,
  fetchCocktailIgredient,
  fetchCocktailName,
  fetchCocktailFirstLetter } from '../services/fetchApi';
import Card from './Card';
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

  const location = useLocation();

  const renderMealsCards = (response) => {
    if (response.meals.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (response.meals.length === 1) {
      history.push(`/foods/${response.meals.idMeal}`);
    }
    if (response.meals.length > 1) {
      console.log(response.meals);
      response.meals.map((meals, index) => (
        <Card key={ meals.idMeal } index={ index } dataMeals={ meals } />
      ));
    }
  };

  const renderCocktailsCards = (response) => {
    if (response.drinks.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (response.drinks.length === 1) {
      history.push(`/foods/${response.drinks.idDrink}`);
    }
    if (response.drinks.length > 1) {
      response.drinks.map((drinks, index) => (
        <Card key={ drinks.idDrink } index={ index } dataDrinks={ drinks } />
      ));
    }
  };

  const searchIngredients = () => {
    fetchIgredient(nameSearch).then((response) => {
      renderMealsCards(response);
    });
  };

  const searchCocktailIngredients = () => {
    fetchCocktailIgredient(nameSearch).then((response) => {
      renderCocktailsCards(response);
    });
  };

  const searchName = () => {
    fetchName(nameSearch).then((response) => {
      renderMealsCards(response);
    });
  };

  const searchCocktailName = () => {
    fetchCocktailName(nameSearch).then((response) => {
      renderCocktailsCards(response);
    });
  };

  const searchFirstLetter = () => {
    const ONE = 1;
    if (nameSearch.length > ONE) {
      global.alert('Your search must have only 1 (one) character');
    }
    fetchFirstLetter(nameSearch).then((response) => {
      renderMealsCards(response);
    });
  };

  const searchCocktailFirstLetter = () => {
    const ONE = 1;
    if (nameSearch.length > ONE) {
      global.alert('Your search must have only 1 (one) character');
    }
    fetchCocktailFirstLetter(nameSearch).then((response) => {
      renderCocktailsCards(response);
    });
  };

  const handleClick = () => {
    if (location.pathname === '/foods') {
      if (searchInput === 'Ingredient') searchIngredients();
      if (searchInput === 'Name') searchName();
      if (searchInput === 'FirstLetter') searchFirstLetter();
    }
    if (location.pathname === '/drinks') {
      if (searchInput === 'Ingredient') searchCocktailIngredients();
      if (searchInput === 'Name') searchCocktailName();
      if (searchInput === 'FirstLetter') searchCocktailFirstLetter();
    }
  };

  return (

    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ handleNameSearch }
      />
      <div>
        <label htmlFor="ingredientSearch">
          <input
            name="searchInput"
            id="ingredientSearch"
            type="radio"
            value="Ingredient"
            data-testid="ingredient-search-radio"
            onChange={ handleSearch }
          />
          Ingredient
        </label>

        <label htmlFor="nameSearch">
          <input
            name="searchInput"
            id="nameSearch"
            type="radio"
            value="Name"
            data-testid="name-search-radio"
            onChange={ handleSearch }
          />
          Name
        </label>

        <label htmlFor="firstLetterSearch">
          <input
            name="searchInput"
            id="firstLetterSearch"
            type="radio"
            value="FirstLetter"
            data-testid="first-letter-search-radio"
            onChange={ handleSearch }
          />
          FirstLetter
        </label>
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
  history: propTypes.shape({
    push: propTypes.func,
    location: propTypes.func,
  }).isRequired,
};

export default SearchBar;
