import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailInfo from '../components/DetailInfo';
import recipesContext from '../context/RecipesContext';
import RecipeInProgress from '../components/RecipeInProgress';
import {
  fetchMealsDetails,
  fetchDrinkDetails,
} from '../services/fetchApi';

function DrinkInProgress() {
  const { setRecipesDetails } = useContext(recipesContext);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const fetchDetails = async () => {
    if (location.pathname.includes('foods')) {
      const response = await fetchMealsDetails(id);
      setRecipesDetails(response.meals);
    } else {
      const response = await fetchDrinkDetails(id);
      setRecipesDetails(response.drinks);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <DetailInfo />
      <RecipeInProgress />

    </div>
  );
}

export default DrinkInProgress;
