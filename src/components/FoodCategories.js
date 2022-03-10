import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryMeal } from '../services/fetchApi';

function FoodCategories() {
  const { foodCategories, setFoodCategories } = useContext(recipesContext);
  const FIVE = 5;

  function handleFoodCategory() {
    fetchListCategoryMeal().then((response) => setFoodCategories(response.meals));
  }

  useEffect(() => {
    handleFoodCategory();
  });

  return (
    <div>
      { foodCategories && foodCategories.slice(0, FIVE).map(({ strCategory }) => (
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

export default FoodCategories;
