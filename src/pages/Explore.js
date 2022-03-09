import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/BottomMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Explore() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Explore" />
      <Footer />
    </div>
  );
}

export default Explore;
