import React, { useState } from 'react';
import propTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [searchEnable, setSearchEnable] = useState(true);
  const [enableSearchBar, setEnableSearchBar] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [recipesDetails, setRecipesDetails] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [mealsByCategory, setMealsByCategory] = useState([]);
  const [mealsMount, setMealsMount] = useState([]);
  const [drinksMount, setDrinksMount] = useState([]);
  const [drinksByCategory, setDrinksByCategory] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [recomendationMount, setRecomendationMount] = useState([]);
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  console.log(email);
=======
  const [measure, setMeasure] = useState([]);
  const [ingredient, setingredient] = useState([]);
  const [started, setStarted] = useState(false);
  const [recipesInProgress, setRecipesInProgress] = useState([]);
  const [searchByIngredient, setSearchByIngredient] = useState('');

  // console.log(toggle);
>>>>>>> 61189c861c13d03a525dddf8890953ec93d9878f

  const contextValue = {
    recomendationMount,
    setRecomendationMount,
    favorite,
    setFavorite,
    searchEnable,
    setSearchEnable,
    enableSearchBar,
    setEnableSearchBar,
    recipes,
    setRecipes,
    redirect,
    setRedirect,
    drinkCategories,
    setDrinkCategories,
    foodCategories,
    setFoodCategories,
    recipesDetails,
    setRecipesDetails,
    mealsByCategory,
    setMealsByCategory,
    mealsMount,
    setMealsMount,
    drinksMount,
    setDrinksMount,
    drinksByCategory,
    setDrinksByCategory,
    toggle,
    setToggle,
    measure,
    setMeasure,
    ingredient,
    setingredient,
    started,
    setStarted,
    recipesInProgress,
    setRecipesInProgress,
    searchByIngredient,
    setSearchByIngredient,
  };

  return (
    <recipesContext.Provider value={ contextValue }>
      { children }
    </recipesContext.Provider>
  );
}

export default RecipesProvider;

RecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
