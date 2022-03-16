import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';

function DrinkCard(props) {
  const { dataDrinks, index, strDrinkThumb, dataTestid } = props;
  const { setRecipesDetails } = useContext(recipesContext);

  const handleClick = async (id) => {
    fetchDrinkDetails(id).then((response) => {
      setRecipesDetails(response.drinks);
    });
  };

  return (
    <Link
      onClick={ () => handleClick(dataDrinks.idDrink) }
      className="cards"
      to={ `/drinks/${dataDrinks.idDrink}` }
      data-testid={ `${index}-card-name` }
    >
      <div data-testid={ `${index}-recomendation-title` }>
        <div data-testid={ dataTestid }>
          {dataDrinks.strDrink}
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt="Meal"
          />
        </div>
      </div>
    </Link>
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
