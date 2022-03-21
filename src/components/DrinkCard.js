import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/card.css';

function DrinkCard(props) {
  const { dataDrinks, index, strDrinkThumb, dataTestid } = props;
  const { setRecipesDetails } = useContext(recipesContext);
  const history = useHistory();

  const handleClick = async (id) => {
    const response = await fetchDrinkDetails(id);
    setRecipesDetails(response.drinks);
    history.push(`/drinks/${id}`);
  };

  return (
    <button
      type="button"
      onClick={ () => handleClick(dataDrinks.idDrink) }
      className="cards"
      data-testid={ `${index}-card-name` }
    >
      <div data-testid={ `${index}-recomendation-title` }>
        <div data-testid={ dataTestid }>
          {dataDrinks.strDrink}
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            className="cards-img"
            alt="Meal"
          />
        </div>
      </div>
    </button>
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
