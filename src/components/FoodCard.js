import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchMealsDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';

function FoodCard(props) {
  const { dataMeals, index, strMealThumb, dataTestid } = props;
  const { recipesDetails, setRecipesDetails } = useContext(recipesContext);

  const handleClick = async (id) => {
    fetchMealsDetails(id).then((response) => {
      setRecipesDetails(response.meals);
    });
    console.log(recipesDetails);
  };

  return (
    <div data-testid={ dataTestid }>
      <Link
        onClick={ () => handleClick(dataMeals.idMeal) }
        to={ `/foods/${dataMeals.idMeal}` }
        data-testid={ `${index}-card-name` }
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
  dataTestid: propTypes.string.isRequired,
};

export default FoodCard;
