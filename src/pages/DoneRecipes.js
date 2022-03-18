import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../css/details.css';

function DoneRecipes() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/done-recipes') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Done Recipes" />
    </div>
  );
}

export default DoneRecipes;
