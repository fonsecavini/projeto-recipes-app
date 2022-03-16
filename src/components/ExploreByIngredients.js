import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchIngredientsDrinks, fetchIngredientsMeals } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';

const ExploreByIngredients = () => {
  const { setSearchByIngredient } = useContext(recipesContext);
  const [ingredients, setIngredients] = useState([]);
  const location = useLocation();

  const fetchIngredients = () => {
    if (location.pathname === '/explore/drinks/ingredients') {
      fetchIngredientsDrinks().then((response) => setIngredients(response.drinks));
    } if (location.pathname === '/explore/foods/ingredients') {
      fetchIngredientsMeals().then((response) => setIngredients(response.meals));
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const handleClick = ({ target }) => {
    console.log(target.id);
    setSearchByIngredient(target.id);
  };

  const TWELVE = 12;

  return (
    <div>
      { location.pathname === '/explore/drinks/ingredients' ? (
        ingredients.slice(0, TWELVE).map((ingredient, index) => (
          <Link
            key={ ingredient.strIngredient1 }
            className="card"
            to="/drinks"
            value={ ingredient.strIngredient1 }
            onClick={ handleClick }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt="DrinksIngredients"
              width="200"
            />
            <h2
              id={ ingredient.strIngredient1 }
              data-testid={ `${index}-card-name` }
            >
              { ingredient.strIngredient1 }
            </h2>
          </Link>
        ))) : (
        ingredients.slice(0, TWELVE).map((ingredient, index) => (
          <Link
            key={ ingredient.strIngredient }
            className="card"
            to="/foods"
            value={ ingredient.strIngredient }
            onClick={ handleClick }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              id={ ingredient.strIngredient }
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              alt="FoodsIngredients"
              width="200"
            />
            <h2
              id={ ingredient.strIngredient }
              data-testid={ `${index}-card-name` }
            >
              { ingredient.strIngredient }
            </h2>
          </Link>
        ))
      )}
    </div>
  );
};

export default ExploreByIngredients;
