import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchIngredientsDrinks } from '../services/fetchApi';

const ExploreByIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = () => {
    fetchIngredientsDrinks().then((response) => setIngredients(response));
  };

  useEffect(() => {
    fetchIngredients();
  });

  console.log(ingredients);

  return (
    <div>
      {
        ingredients.map((ingredient) => (
          <Link
            key={ ingredient }
            className="card"
            to="/drinks"
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png` }
              alt="DrinksIngredients"
            />
            <h2 data-testid={ `${index}-card-name` }>{ ingredient }</h2>
          </Link>
        ))
      }
    </div>
  );
};

export default ExploreByIngredients;
