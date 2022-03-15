import React, { useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getName, setName } from '../services/RecipesLocalStorage';
import Card from './Card';
import DetailInfo from './DetailInfo';
import recipesContext from '../context/RecipesContext';
import {
  fetchMealsDetails,
  fetchDrinkDetails,
  fetchRecommendationsDrinks,
  fetchRecommendationsMeals,
} from '../services/fetchApi';
import Player from './Player';
import IngredientsList from './IngredientsList';
import '../css/details.css';

function Detail() {
  const {
    recipesDetails, setRecipesDetails, setRecomendationMount,
    started,
    setStarted,
  } = useContext(recipesContext);
  const location = useLocation();
  const history = useHistory();

  function getDrinksRecomendations() {
    fetchRecommendationsDrinks()
      .then((response) => setRecomendationMount(response.drinks));
  }

  function getMealsRecomendations() {
    fetchRecommendationsMeals()
      .then((response) => setRecomendationMount(response.meals));
  }

  useEffect(() => {
    const fetchDetails = async () => {
      if (location.pathname.includes('foods')) {
        getDrinksRecomendations();
        fetchMealsDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.meals);
        });
      } else {
        getMealsRecomendations();
        fetchDrinkDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.drinks);
        });
      }
    };

    fetchDetails();
  }, []);

  const handleClick = () => {
    const recipesInProg = getName('inProgressRecipes')
      ? getName('inProgressRecipes')
      : ({
        cocktail: {},
        meals: {} });

    if (recipesDetails.length > 0) {
      const ingridients = Object.keys(recipesDetails[0])
        .filter((key) => key.includes('strIngredient'))
        .map((e) => (recipesDetails[0][e]));

      setStarted(true);
      if (location.pathname.includes('foods')) {
        recipesInProg.meals[recipesDetails[0].idMeal] = ingridients;
        console.log(recipesInProg);
        setName('inProgressRecipes', recipesInProg);
        history.push(`/foods/${recipesDetails[0].idMeal}/in-progress`);
      } else {
        recipesInProg.cocktail[recipesDetails[0].idDrink] = ingridients;
        setName('inProgressRecipes', recipesInProg);
        history.push(`/drinks/${recipesDetails[0].idDrink}/in-progress`);
      }
    }
  };

  return (
    <div>
      {
        recipesDetails.length > 0 && (
          <div>
            <DetailInfo />
            <IngredientsList />
            <Player
              url={ recipesDetails[0].strYoutube }
            />
            {/* card de receitas */}
            <div className="cardsRecomendation">
              <Card />
            </div>
            {/* botao de inicio da receita */}
            {
              <button
                className="StartRecipe"
                type="button"
                data-testid="start-recipe-btn"
                onClick={ handleClick }
              >
                {
                  started
                    ? ('Continue Recipe')
                    : ('Start recipe')
                }

              </button>
            }
          </div>)
      }
    </div>
  );
}

export default Detail;
