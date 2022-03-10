import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import { fetchRecommendationsMeals } from '../services/fetchApi';
import FoodCard from './FoodCard';

function FoodList() {
  const { recipes, setRedirect, redirect } = useContext(recipesContext);
  const [mealsMount, setMealsMount] = useState([]);
  const TWELVE = 12;

  function handleMeals() {
    fetchRecommendationsMeals().then((response) => setMealsMount(response.meals));
  }

  function handleRedirect() {
    if (recipes && recipes.length === 1) {
      return setRedirect(true);
    }
  }

  useEffect(() => {
    handleMeals();
  }, []);

  useEffect(() => {
    handleRedirect();
    if (recipes === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
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
        />
      ))}
      { recipes.length === 0
        && mealsMount.length > 0
        && mealsMount.slice(0, TWELVE).map((meal, index) => (
          <FoodCard
            key={ meal.idMeal }
            index={ index }
            dataMeals={ meal }
            strMealThumb={ meal.strMealThumb }
          />
        ))}
      { redirect && <Redirect to={ `/foods/${recipes[0].idMeal}` } />}
    </div>
  );
}

export default FoodList;
