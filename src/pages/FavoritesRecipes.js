import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function FavoritesRecipes() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/favorite-recipes') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Favorite Recipes" />
    </div>
  );
}

export default FavoritesRecipes;
