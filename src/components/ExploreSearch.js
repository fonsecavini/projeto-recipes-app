import React from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

function ExploreSearch() {
  const location = useLocation();
  const { history } = props;

  const handleClick = ({ target }) => {
    console.log(target.value);
    const Ingredients = 'By Ingredient';
    if (target.value === Ingredients && location.pathname === '/explore/foods') {
      history.push('/explore/foods/ingredients');
    }
    if (target.value === Ingredients && location.pathname === '/explore/drinks') {
      history.push('/explore/drinks/ingredients');
    }
    if (target.value === 'By Nationality') {
      history.push('/explore/foods/nationalities');
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="explore-by-ingredient"
        value="By Ingredient"
      >
        By Ingredient
      </button>
      { location.pathname === '/explore/foods' && (
        <button
          type="button"
          onClick={ handleClick }
          data-testid="explore-by-nationality"
          value="By Nationality"
        >
          By Nationality
        </button>
      )}
      <button
        type="button"
        onClick={ handleClick }
        data-testid="explore-surprise"
        value="Surprise me!"
      >
        Surprise me!
      </button>
    </div>
  );
}

ExploreSearch.propTypes = {
  history: propTypes.func.isRequired,
};

export default ExploreSearch;
