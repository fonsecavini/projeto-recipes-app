import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import RecipesContext from '../context/RecipesContext';

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
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
