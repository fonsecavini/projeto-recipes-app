import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DrinkCard from './DrinkCard';
import FoodCard from './FoodCard';
import RecipesContext from '../context/RecipesContext';

function Card() {
  const SIX = 6;
  const location = useLocation();
  const { recomendationMount } = useContext(RecipesContext);

  return (
    <div className="cardsRecomendation">
      <div className="cards-box">
        { recomendationMount.slice(0, SIX).map((card, index) => {
          if (location.pathname.includes('foods')) {
            return (
              <DrinkCard
                key={ card.idDrink }
                dataTestid={ `${index}-recomendation-card` }
                index={ index }
                dataDrinks={ card }
                strDrinkThumb={ card.strDrinkThumb }
              />);
          } return (
            <FoodCard
              key={ card.idMeal }
              dataTestid={ `${index}-recomendation-card` }
              index={ index }
              dataMeals={ card }
              strMealThumb={ card.strMealThumb }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Card;
