import React, { useContext, useEffect, useState } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryDrink, fetchDrinksByCategory } from '../services/fetchApi';
import '../css/details.css';

function DrinksCategories() {
  const { drinkCategories,
    setDrinkCategories,
    setDrinksByCategory,
    setDrinksMount,
    setToggle } = useContext(recipesContext);
  const [drinksCategorySelected, setDrinksCategorySelected] = useState('');
  const FIVE = 5;

  function handleDrinksCategory() {
    fetchListCategoryDrink().then((response) => setDrinkCategories(response.drinks));
  }

  function handleClickButton(category) {
    setDrinksCategorySelected(category);
    fetchDrinksByCategory(category)
      .then((response) => setDrinksByCategory(response.drinks));
    setDrinksMount('');
    setToggle(false);
    if (drinksCategorySelected === category) {
      setToggle((prevState) => !prevState);
    }
  }

  useEffect(() => {
    handleDrinksCategory();
  }, []);

  function handleButtonAll() {
    setToggle(true);
  }

  return (
    <div>
      { drinkCategories && drinkCategories.slice(0, FIVE).map(({ strCategory }) => (
        <button
          key={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          value={ strCategory }
          onClick={ (e) => handleClickButton(e.target.value) }
        >
          { strCategory }
        </button>
      )) }
      <button
        type="button"
        data-testid="All-category-filter"
        value="All"
        onClick={ () => handleButtonAll() }
      >
        All
      </button>
    </div>
  );
}

export default DrinksCategories;
