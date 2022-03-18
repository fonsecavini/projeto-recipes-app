import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchMealsDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';

function FoodCard(props) {
  const { dataMeals, index, strMealThumb, dataTestid } = props;
  const { setRecipesDetails } = useContext(recipesContext);
  const history = useHistory();

  const handleClick = async (id) => {
    const response = await fetchMealsDetails(id);
    setRecipesDetails(response.meals);
    history.push(`/foods/${id}`);
  };

  return (
    <button
      type="button"
      onClick={ () => handleClick(dataMeals.idMeal) }
      className="cards"
      // to={ `/foods/${dataMeals.idMeal}` }
      data-testid={ `${index}-card-name` }
    >
      <div data-testid={ `${index}-recomendation-title` }>
        <div data-testid={ dataTestid }>
          {dataMeals.strMeal}
          <img
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt="Meal"
          />
        </div>
      </div>
    </button>
  );
}

FoodCard.propTypes = {
  dataMeals: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  strMealThumb: propTypes.string.isRequired,
  dataTestid: propTypes.string.isRequired,
};

export default FoodCard;
