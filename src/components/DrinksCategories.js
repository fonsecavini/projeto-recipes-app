import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryDrink, fetchDrinksByCategory } from '../services/fetchApi';

function DrinksCategories() {
  const { drinkCategories,
    setDrinkCategories,
    setDrinksByCategory,
    setDrinksMount,
    setToggle } = useContext(recipesContext);
  const FIVE = 5;

  function handleDrinksCategory() {
    fetchListCategoryDrink().then((response) => setDrinkCategories(response.drinks));
  }

  function handleClickButton(category) {
    fetchDrinksByCategory(category)
      .then((response) => setDrinksByCategory(response.drinks));
    setDrinksMount('');
    setToggle((prevState) => !prevState);
  }

  useEffect(() => {
    handleDrinksCategory();
  }, []);

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
    </div>
  );
}

export default DrinksCategories;
