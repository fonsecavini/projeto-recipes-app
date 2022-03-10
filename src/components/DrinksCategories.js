import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryDrink } from '../services/fetchApi';

function DrinksCategories() {
  const { drinkCategories, setDrinkCategories } = useContext(recipesContext);
  const FIVE = 5;

  function handleDrinksCategory() {
    fetchListCategoryDrink().then((response) => setDrinkCategories(response.drinks));
  }

  useEffect(() => {
    handleDrinksCategory();
  });

  return (
    <div data-testid="Ordinary Drink-category-filter">
      { drinkCategories && drinkCategories.slice(0, FIVE).map(({ strCategory }) => (
        <button
          key={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
        >
          { strCategory }
        </button>
      )) }
    </div>
  );
}

export default DrinksCategories;
