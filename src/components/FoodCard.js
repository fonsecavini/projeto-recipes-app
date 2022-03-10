import React from 'react';
import propTypes from 'prop-types';

function FoodCard(props) {
  const { dataMeals, index, strMealThumb } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>
        {dataMeals.strMeal}
      </p>
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
