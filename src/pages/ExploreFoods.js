import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/BottomMenu';
import Header from '../components/Header';
import ExploreSearch from '../components/ExploreSearch';
import RecipesContext from '../context/RecipesContext';
import '../css/details.css';

function ExploreFoods() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore/foods') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Explore Foods" />
      <ExploreSearch />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
