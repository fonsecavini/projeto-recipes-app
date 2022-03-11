import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';

function DrinkCard(props) {
  const { dataDrinks, index, strDrinkThumb, dataTestid } = props;
  const { setRecipesDetails } = useContext(recipesContext);

  const handleClick = async (id) => {
    fetchDrinkDetails(id).then((response) => {
      setRecipesDetails(response.drinks);
    });
  };

  return (
    <div data-testid={ dataTestid }>
      <Link
        onClick={ () => handleClick(dataDrinks.idDrink) }
        to={ `/drinks/${dataDrinks.idDrink}` }
        data-testid={ dataTestid }
      >
        {dataDrinks.strDrink}
      </Link>
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
  dataTestid: propTypes.string.isRequired,
};

export default DrinkCard;
