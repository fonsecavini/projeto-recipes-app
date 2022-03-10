import React from 'react';
import propTypes from 'prop-types';

function DrinkCard(props) {
  const { dataDrinks, index, strDrinkThumb } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h5 data-testid={ `${index}-card-name` }>
        {dataDrinks.strDrink}
      </h5>
      <img
        width="100px"
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt="Meal"
      />
    </div>
  );
}

DrinkCard.propTypes = {
  dataDrinks: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  strDrinkThumb: propTypes.string.isRequired,
  strDrink: propTypes.string.isRequired,
};

export default DrinkCard;
