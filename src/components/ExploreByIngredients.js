import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchIngredientsDrinks,
  fetchIngredientsMeals,
  fetchIgredient,
  fetchCocktailIgredient } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';

const ExploreByIngredients = () => {
  const { setRecipes } = useContext(recipesContext);
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const drinksLocation = '/explore/drinks/ingredients';

  const fetchIngredients = () => {
    if (location.pathname === drinksLocation) {
      fetchIngredientsDrinks().then((response) => setIngredients(response.drinks));
    } if (location.pathname === '/explore/foods/ingredients') {
      fetchIngredientsMeals().then((response) => setIngredients(response.meals));
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const handleClick = async ({ target }) => {
    if (location.pathname === '/explore/foods/ingredients') {
      const responseMeals = await fetchIgredient(target.id);
      setRecipes(responseMeals.meals);
      history.push('/foods');
    }
    if (location.pathname === drinksLocation) {
      const responseDrinks = await fetchCocktailIgredient(target.id);
      setRecipes(responseDrinks.drinks);
      history.push('/drinks');
    }
  };

  const TWELVE = 12;

  return (
    <div>
      { location.pathname === drinksLocation ? (
        ingredients.slice(0, TWELVE).map((ingredient, index) => (
          <button
            key={ ingredient.strIngredient1 }
            type="button"
            onClick={ handleClick }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt="DrinksIngredients"
              width="200"
              id={ ingredient.strIngredient1 }
            />
            <h2
              id={ ingredient.strIngredient1 }
              data-testid={ `${index}-card-name` }
            >
              { ingredient.strIngredient1 }
            </h2>
          </button>
        ))) : (
        ingredients.slice(0, TWELVE).map((ingredient, index) => (
          <button
            key={ ingredient.strIngredient }
            type="button"
            onClick={ handleClick }
            data-testid={ `${index}-ingredient-card` }
          >
            <div>
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
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default ExploreByIngredients;
