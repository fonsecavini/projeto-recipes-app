import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchSurpriseMeal, fetchSurpriseDrink } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';
import '../css/buttons.css';

function ExploreSearch() {
  const location = useLocation();
  const history = useHistory();
  const locationMeals = '/explore/foods';
  const {
    setSurpriseDrink,
    setSurpriseMeal,
  } = useContext(recipesContext);

  const handleSurprise = async () => {
    if (location.pathname === locationMeals) {
      const responseMeals = await fetchSurpriseMeal();
      setSurpriseMeal(responseMeals.meals);
      history.push(`/foods/${responseMeals.meals[0].idMeal}`);
    }
    if (location.pathname === '/explore/drinks') {
      const responseDrink = await fetchSurpriseDrink();
      setSurpriseDrink(responseDrink.drinks);
      history.push(`/drinks/${responseDrink.drinks[0].idDrink}`);
    }
  };

  const handleClick = ({ target }) => {
    const Ingredients = 'By Ingredient';
    if (target.value === Ingredients && location.pathname === locationMeals) {
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
    <div className="explore-box">
      <button
        className="explore-btn"
        type="button"
        onClick={ handleClick }
        data-testid="explore-by-ingredient"
        value="By Ingredient"
      >
        By Ingredient
      </button>
      { location.pathname === '/explore/foods' && (
        <button
          className="explore-btn"
          type="button"
          onClick={ handleClick }
          data-testid="explore-by-nationality"
          value="By Nationality"
        >
          By Nationality
        </button>
      )}
      <button
        className="explore-btn"
        type="button"
        onClick={ handleSurprise }
        data-testid="explore-surprise"
        value="Surprise me!"
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreSearch;
