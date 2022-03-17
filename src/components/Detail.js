import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getName } from '../services/RecipesLocalStorage';
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
import RecipesStatus from './RecipeStatus';

const recipesInProg = getName('inProgressRecipes')
  ? getName('inProgressRecipes')
  : ({
    cocktail: {},
    meals: {} });

function Detail() {
  const {
    recipesDetails, setRecipesDetails, setRecomendationMount,
    setStarted,
  } = useContext(recipesContext);
  const location = useLocation();

  function getDrinksRecomendations() {
    fetchRecommendationsDrinks()
      .then((response) => setRecomendationMount(response.drinks));
  }

  function getMealsRecomendations() {
    fetchRecommendationsMeals()
      .then((response) => setRecomendationMount(response.meals));
  }

  const fetchDetails = async () => {
    if (location.pathname.includes('foods')) {
      getDrinksRecomendations();
      const response = await fetchMealsDetails(id);
      setRecipesDetails(response.meals);
    } else {
      getMealsRecomendations();
      const response = await fetchDrinkDetails(id);
      setRecipesDetails(response.drinks);
    }
  };

  useEffect(() => {
    console.log(recipesInProg);

    const id = location.pathname.split('/')[2];

    const idsMeals = Object.keys(recipesInProg)
      .includes('meals')
      ? Object.keys(recipesInProg.meals)
      : [];
    if (idsMeals.includes(id)) setStarted(true);

    const idsDrinks = Object.keys(recipesInProg)
      .includes('cocktails')
      ? Object.keys(recipesInProg.cocktails)
      : [];
    if (idsDrinks.includes(id)) setStarted(true);

    fetchDetails();
  }, []);

  return (
    <div>
      { console.log(recipesInProg)}
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
            <RecipesStatus recipesInProg={ recipesInProg } />
          </div>)
      }
    </div>
  );
}

export default Detail;
