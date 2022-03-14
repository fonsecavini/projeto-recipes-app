import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import RecipesContext from '../context/RecipesContext';
import ExploreByIngredients from '../components/ExploreByIngredients';

function ExploreDrinksByIngredients() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore/drinks/ingredients') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Explore Ingredients" />
      <ExploreByIngredients />
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
