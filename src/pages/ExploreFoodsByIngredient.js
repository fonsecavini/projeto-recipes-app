import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import RecipesContext from '../context/RecipesContext';

function ExploreFoodsByIngredients() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore/foods/ingredients') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Explore Ingredients" />
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
