import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import recipesContext from '../context/RecipesContext';
import { setName } from '../services/RecipesLocalStorage';

import '../css/details.css';

function RecipesStatus(props) {
  const location = useLocation();
  const history = useHistory();
  const { started, recipesDetails } = useContext(recipesContext);
  const { recipesInProg } = props;
  const handleClick = () => {
    if (recipesDetails.length > 0) {
      const ingridients = Object.keys(recipesDetails[0])
        .filter((key) => key.includes('strIngredient'))
        .map((e) => (recipesDetails[0][e]));

      if (location.pathname.includes('foods')) {
        recipesInProg.meals[recipesDetails[0].idMeal] = ingridients;
        console.log(recipesInProg);
        setName('inProgressRecipes', recipesInProg);
        history.push(`/foods/${recipesDetails[0].idMeal}/in-progress`);
      } else {
        recipesInProg.cocktail[recipesDetails[0].idDrink] = ingridients;
        setName('inProgressRecipes', recipesInProg);
        history.push(`/drinks/${recipesDetails[0].idDrink}/in-progress`);
      }
    }
  };

  return (
    <div>
      {
        recipesDetails.length > 0 && (
          <div>
            <button
              className="StartRecipe"
              type="button"
              data-testid="start-recipe-btn"
              onClick={ handleClick }
            >
              {
                started
                  ? ('Continue Recipe')
                  : ('Start recipe')
              }

            </button>
          </div>)
      }
    </div>
  );
}

RecipesStatus.propTypes = {
  recipesInProg: propTypes.objectOf.isRequired,
};

export default RecipesStatus;
