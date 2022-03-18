import React, { useContext, useEffect, useState } from 'react';
import recipesContext from '../context/RecipesContext';
import { fetchListCategoryMeal, fetchMealByCategory } from '../services/fetchApi';
import '../css/details.css';

function FoodCategories() {
  const { foodCategories,
    setFoodCategories,
    setMealsByCategory,
    setMealsMount,
    setToggle } = useContext(recipesContext);
  const [foodCategorySelected, setFoodCategorySelected] = useState('');
  const FIVE = 5;

  function handleFoodCategory() {
    fetchListCategoryMeal().then((response) => setFoodCategories(response.meals));
  }

  function handleClickButton(category) {
    setFoodCategorySelected(category);
    fetchMealByCategory(category).then((response) => setMealsByCategory(response.meals));
    setMealsMount('');
    setToggle(false);
    if (foodCategorySelected === category) {
      setToggle((prevState) => !prevState);
    }
  }

  useEffect(() => {
    handleFoodCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonAll() {
    setToggle(true);
  }

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

export default FoodCategories;
