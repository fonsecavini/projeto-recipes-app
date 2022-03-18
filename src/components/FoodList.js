import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import { fetchRecommendationsMeals } from '../services/fetchApi';
import FoodCard from './FoodCard';
import '../css/details.css';

function FoodList() {
  const { recipes,
    setRedirect,
    redirect,
    mealsMount,
    setMealsMount,
    mealsByCategory,
    toggle } = useContext(recipesContext);

  const TWELVE = 12;
  console.log(recipes);
  console.log(mealsMount);

  const handleMeals = async () => {
    const response = await fetchRecommendationsMeals();
    setMealsMount(response.meals);
  };

  useEffect(() => {
    if (toggle === true) {
      handleMeals();
    }
  }, [toggle]);

  function handleRedirect() {
    return setRedirect(true);
  }

  useEffect(() => {
    if (recipes && recipes.length === 1) {
      handleRedirect();
    }
  });

  return (
    <div>
      { recipes && recipes.slice(0, TWELVE).map((meals, index) => (
        <FoodCard
          key={ meals.idMeal }
          index={ index }
          dataMeals={ meals }
          strMealThumb={ meals.strMealThumb }
          dataTestid={ `${index}-recipe-card` }
        />
      )) }
      { recipes.length === 0
        && mealsMount.length > 0
        && mealsMount.slice(0, TWELVE).map((meal, index) => (
          <FoodCard
            key={ meal.idMeal }
            index={ index }
            dataMeals={ meal }
            strMealThumb={ meal.strMealThumb }
            dataTestid={ `${index}-recipe-card` }
          />
        ))}
      { mealsByCategory && mealsByCategory.slice(0, TWELVE).map((food, index) => (
        <FoodCard
          key={ food.idMeal }
          index={ index }
          dataMeals={ food }
          strMealThumb={ food.strMealThumb }
          dataTestid={ `${index}-recipe-card` }
        />
      ))}
      { redirect && <Redirect to={ `/foods/${recipes[0].idMeal}` } />}
    </div>
  );
}

export default FoodList;
