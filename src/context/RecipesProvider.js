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
  const [email, setEmail] = useState('');
  console.log(toggle);

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
    email,
    setEmail,
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
