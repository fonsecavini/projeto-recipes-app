import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import { fetchRecommendationsDrinks } from '../services/fetchApi';
import DrinkCard from './DrinkCard';

function DrinkList() {
  const { recipes, setRedirect, redirect } = useContext(recipesContext);
  const [drinksMount, setDrinksMount] = useState([]);
  const TWELVE = 12;

  function handleDrinks() {
    fetchRecommendationsDrinks().then((response) => setDrinksMount(response.drinks));
  }

  // console.log(drinksMount);

  function handleRedirect() {
    if (recipes && recipes.length === 1) {
      return setRedirect(true);
    }
  }

  useEffect(() => {
    handleDrinks();
  }, []);

  useEffect(() => {
    handleRedirect();
    if (recipes === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  });

  return (
    <div>
      {recipes && recipes.slice(0, TWELVE).map((drinks, index) => (
        <DrinkCard
          key={ drinks.idDrink }
          index={ index }
          dataDrinks={ drinks }
          strDrinkThumb={ drinks.strDrinkThumb }
        />
      ))}
      { recipes.length === 0
        && drinksMount.length > 0
        && drinksMount.slice(0, TWELVE).map((drink, index) => (
          <DrinkCard
            key={ drink.idDrink }
            index={ index }
            dataDrinks={ drink }
            strDrinkThumb={ drink.strDrinkThumb }
          />
        ))}
      { redirect && <Redirect to={ `/drinks/${recipes[0].idDrink}` } />}
    </div>
  );
}

export default DrinkList;

// const renderCocktailsCards = (response) => {
//   if (response.drinks.length === 0) {
//     global.alert('Sorry, we haven\'t found any recipes for these filters.');
//   }
//   if (response.drinks.length === 1) {
//     history.push(`/foods/${response.drinks.idDrink}`);
//   }
//   if (response.drinks.length > 1) {
//     response.drinks.map((drinks, index) => (
//       <Card key={ drinks.idDrink } index={ index } dataDrinks={ drinks } />
//     ));
//   }
// };
