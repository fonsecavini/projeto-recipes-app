import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchMealsDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';

function FoodCard(props) {
  const { dataMeals, index, strMealThumb } = props;
  const { setRecipesDetails } = useContext(recipesContext);

  const handleClick = (id) => {
    fetchMealsDetails(id).then((response) => {
      setRecipesDetails(response);
      console.log(response);
    });
  };

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link
        to={ `/foods/${dataMeals.idMeal}` }
        data-testid={ `${index}-card-name` }
        onClick={ () => handleClick(dataMeals.idMeal) }
      >
        {dataMeals.strMeal}
      </Link>
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt="Meal"
        width="100px"
      />
    </div>
  );
}

FoodCard.propTypes = {
  dataMeals: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  strMealThumb: propTypes.string.isRequired,
};

export default FoodCard;
