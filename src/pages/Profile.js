import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/BottomMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Profile() {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Profile" />
      <Footer />
    </div>
  );
}

export default Profile;
