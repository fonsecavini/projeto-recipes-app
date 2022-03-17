const DRINK_ALC_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const DRINK_NO_ALC_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

export const fetchMealByCategory = async (category) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = result.json();
  return response;
};

export const fetchDrinksByCategory = async (category) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = result.json();
  return response;
};

export const fetchIgredient = async (ingredient) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = result.json();
  return response;
};

export const fetchCocktailIgredient = async (ingredient) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = result.json();
  return response;
};

export const fetchName = async (nome) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  const response = result.json();
  return response;
};

export const fetchCocktailName = async (nome) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  const response = result.json();
  return response;
};

export const fetchFirstLetter = async (primeiraLetra) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const response = result.json();
  return response;
};

export const fetchCocktailFirstLetter = async (primeiraLetra) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const response = result.json();
  return response;
};

export const fetchArea = async (area) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const response = result.json();
  return response;
};

export const fetchMealsDetails = async (id) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = result.json();
  return response;
};

export const fetchDrinkDetails = async (id) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = result.json();
  return response;
};

export const fetchRecommendationsDrinks = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await result.json();
  return response;
};

export const fetchRecommendationsMeals = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = result.json();
  return response;
};

export const fetchListCategoryMeal = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = result.json();
  return response;
};

export const fetchListCategoryDrink = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = result.json();
  return response;
};

export const fetchDrinksAlcoholic = async () => {
  const result = await fetch(DRINK_ALC_URL);
  const response = result.json();
  return response;
};

export const fetchDrinksNoAlcoholic = async () => {
  const result = await fetch(DRINK_NO_ALC_URL);
  const response = result.json();
  return response;
};

export const fetchIngredientsDrinks = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const response = result.json();
  return response;
};

export const fetchIngredientsMeals = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const response = result.json();
  return response;
};

export const fetchSurpriseMeal = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = result.json();
  return response;
};

export const fetchSurpriseDrink = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const response = result.json();
  return response;
};

export const fetchByNationalities = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const response = result.json();
  return response;
};

export const fetchRecipesByArea = async (Area) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`);
  const response = result.json();
  return response;
};
