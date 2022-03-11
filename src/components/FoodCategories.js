import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryMeal, fetchMealByCategory } from '../services/fetchApi';

function FoodCategories() {
  const { foodCategories,
    setFoodCategories,
    setMealsByCategory,
    setMealsMount,
    setToggle } = useContext(recipesContext);
  const FIVE = 5;

  function handleFoodCategory() {
    fetchListCategoryMeal().then((response) => setFoodCategories(response.meals));
  }

  function handleClickButton(category) {
    fetchMealByCategory(category).then((response) => setMealsByCategory(response.meals));
    setMealsMount('');
    setToggle((prevState) => !prevState);
  }

  useEffect(() => {
    handleFoodCategory();
  }, []);

  return (
    <div>
      { foodCategories && foodCategories.slice(0, FIVE).map(({ strCategory }) => (
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

export default FoodCategories;
