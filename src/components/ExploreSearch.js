import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function ExploreSearch() {
  const location = useLocation();
  const history = useHistory();

  const handleClick = ({ target }) => {
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

export default ExploreSearch;
