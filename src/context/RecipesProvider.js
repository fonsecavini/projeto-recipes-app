import React, { useState } from 'react';
import propTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [searchEnable, setSearchEnable] = useState(true);
  const [enableSearchBar, setEnableSearchBar] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [recipesDetails, setRecipesDetails] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [mealsByCategory, setMealsByCategory] = useState([]);
  const [mealsMount, setMealsMount] = useState([]);
  const [drinksMount, setDrinksMount] = useState([]);
  const [drinksByCategory, setDrinksByCategory] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [recomendationMount, setRecomendationMount] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [ingredient, setingredient] = useState([]);
  const [started, setStarted] = useState(false);
  const [recipesInProgress, setRecipesInProgress] = useState([]);
  const [searchByIngredient, setSearchByIngredient] = useState('');
  const [surpriseMeal, setSurpriseMeal] = useState([]);
  const [surpriseDrink, setSurpriseDrink] = useState([]);
  const [redirectSurpriseMeal, setRedirectSurpriseMeal] = useState(false);
  const [redirectSurpriseDrink, setRedirectSurpriseDrink] = useState(false);
  const [areaFoods, setAreaFoods] = useState([]);
  const [recipesArea, setRecipesArea] = useState([]);
  const [recipesAll, setRecipesAll] = useState([]);
  const [recipesDetails2, setRecipesDetails2] = useState([]);

  const handleFavorite = () => {
    setFavorite(!favorite);
    const itensLocalStorage = localStorage.getItem('favoriteRecipes');
    const objLocalStorage = {
      id: 'strMeal' in recipesDetails[0]
        ? recipesDetails[0].idMeal : recipesDetails[0].idDrink,
      type: 'strMeal' in recipesDetails[0]
        ? 'food' : 'drink',
      nationality: 'strMeal' in recipesDetails[0]
        ? recipesDetails[0].strArea : '',
      category: recipesDetails[0].strCategory,
      alcoholicOrNot: 'strMeal' in recipesDetails[0]
        ? '' : recipesDetails[0].strAlcoholic,
      name: 'strMeal' in recipesDetails[0]
        ? recipesDetails[0].strMeal : recipesDetails[0].strDrink,
      image: 'strMeal' in recipesDetails[0]
        ? recipesDetails[0].strMealThumb : recipesDetails[0].strDrinkThumb,
    };
    if (itensLocalStorage === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([objLocalStorage]));
    }
    if (itensLocalStorage !== null) {
      const array = JSON.parse(localStorage.getItem('favoriteRecipes'));
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...array, objLocalStorage]));
    }
  };

  const contextValue = {
    handleFavorite,
    recipesDetails2,
    setRecipesDetails2,
    recomendationMount,
    setRecomendationMount,
    favorite,
    setFavorite,
    searchEnable,
    setSearchEnable,
    enableSearchBar,
    setEnableSearchBar,
    recipes,
    setRecipes,
    redirect,
    setRedirect,
    drinkCategories,
    setDrinkCategories,
    foodCategories,
    setFoodCategories,
    recipesDetails,
    setRecipesDetails,
    mealsByCategory,
    setMealsByCategory,
    mealsMount,
    setMealsMount,
    drinksMount,
    setDrinksMount,
    drinksByCategory,
    setDrinksByCategory,
    toggle,
    setToggle,
    measure,
    setMeasure,
    ingredient,
    setingredient,
    started,
    setStarted,
    recipesInProgress,
    setRecipesInProgress,
    searchByIngredient,
    setSearchByIngredient,
    surpriseMeal,
    setSurpriseMeal,
    surpriseDrink,
    setSurpriseDrink,
    areaFoods,
    setAreaFoods,
    recipesArea,
    setRecipesArea,
    redirectSurpriseMeal,
    setRedirectSurpriseMeal,
    redirectSurpriseDrink,
    setRedirectSurpriseDrink,
    recipesAll,
    setRecipesAll,
  };

  return (
    <recipesContext.Provider value={ contextValue }>
      { children }
    </recipesContext.Provider>
  );
}

export default RecipesProvider;

RecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
