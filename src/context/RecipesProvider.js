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

  console.log(drinkCategories);
  const contextValue = {
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
