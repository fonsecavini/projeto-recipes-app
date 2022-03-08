import React from 'react';
import propTypes from 'prop-types';

function Card(props) {
  const { dataMeals, index } = props;
  return (
    <div>
      {console.log('xablau')}
      <p data-testid={ `${index}-card-name` }>
        {dataMeals.strMeal}
      </p>
      <p data-testid={ `${index}-recipe-card` }>
        {dataMeals.strInstructions}
      </p>
    </div>
  );
}

Card.propTypes = {
  meals: propTypes.objectOf.isRequired,
};

export default Card;
