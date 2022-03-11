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

  // console.log(drinkCategories);
  const contextValue = {
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
