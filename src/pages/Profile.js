import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/BottomMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Profile(props) {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);
  const { history } = props;

  const location = useLocation();

  const emailUser = localStorage.getItem('user');
  const user = JSON.parse(emailUser);

  const handleClickFavorite = () => {
    history.push('/favorite-recipes');
  };

  const handleClickDonaRecipes = () => {
    history.push('/done-recipes');
  };

  const handleClickLogout = () => {
    history.push('/');
    localStorage.clear();
  };

  useEffect(() => {
    if (location.pathname === '/profile') setSearchEnable(false);
  });
  return (
    <div>
      <Header title="Profile" />
      <div>
        <h2 data-testid="profile-email">{ user.email }</h2>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ handleClickDonaRecipes }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ handleClickFavorite }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClickLogout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: propTypes.func.isRequired,
};

export default Profile;
