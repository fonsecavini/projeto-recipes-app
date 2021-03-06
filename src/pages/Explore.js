import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/BottomMenu';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../css/details.css';
import '../css/buttons.css';

function Explore(props) {
  const {
    setSearchEnable,
  } = useContext(RecipesContext);
  const { history } = props;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explore') setSearchEnable(false);
  });

  const handleClick = ({ target }) => {
    if (target.value === 'Foods') {
      history.push('/explore/foods');
    }
    if (target.value === 'Drinks') {
      history.push('/explore/drinks');
    }
  };

  return (
    <div className="page-div">
      <Header title="Explore" />
      <div className="explore-box">
        <button
          className="explore-btn"
          type="button"
          onClick={ handleClick }
          data-testid="explore-foods"
          value="Foods"
        >
          Explore Foods
        </button>
        <button
          className="explore-btn"
          type="button"
          onClick={ handleClick }
          data-testid="explore-drinks"
          value="Drinks"
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: propTypes.func.isRequired,
};

export default Explore;
