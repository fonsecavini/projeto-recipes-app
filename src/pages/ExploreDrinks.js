import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import ExploreSearch from '../components/ExploreSearch';
import RecipesContext from '../context/RecipesContext';
import '../css/details.css';
import '../css/buttons.css';

function ExploreDrinks() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore/drinks') setSearchEnable(false);
  });
  return (
    <div className="page-div">
      <Header title="Explore Drinks" />
      <ExploreSearch />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
