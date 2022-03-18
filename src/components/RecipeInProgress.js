import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import { fetchMealsDetails, fetchDrinkDetails } from '../services/fetchApi';
import { setName, getName } from '../services/RecipesLocalStorage';
import '../css/details.css';

function RecipeInProgress() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const {
    // recipesDetails,
    measure,
    setMeasure,
    setingredient,
    ingredient,
    // setRecipesDetails,
  } = useContext(recipesContext);
  // const progressRecipes = getName('inProgressRecipes');
  // const ingredientRecipe = progressRecipes.meals[id];

  const [isChecked, setIsChecked] = useState(false);

  const getMeasureAndIngridient = (param) => {
    if (param.length > 0) {
      const measures = Object.keys(param[0]);
      const measures1 = measures.filter((key) => key.includes('strMeasure'));
      const measures2 = measures1.map((e) => {
        if (param[0][e] === null) return '';
        return param[0][e];
      });
      setMeasure(measures2);
      const ingredients = Object.keys(param[0]);
      const ingredients1 = ingredients.filter((key) => key.includes('strIngredient'));
      const ingredients2 = ingredients1.map((e) => (param[0][e]));
      const ingredients3 = ingredients2
        .filter((item) => item !== '' && item !== ' ' && item !== null);
      setingredient(ingredients3);

      // const measures = Object.keys(recipesDetails[0])
      //   .filter((key) => key.includes('strMeasure'))
      //   .map((e) => (recipesDetails[0][e]));
      // setMeasure(measures);

      // const ingredients = Object.keys(recipesDetails[0])
      //   .filter((key) => key.includes('strIngredient'))
      //   .map((e) => (recipesDetails[0][e]));
      // setingredient(ingredients);
    }
  };

  const fetchDetails = async () => {
    if (location.pathname.includes('foods')) {
      const response = await fetchMealsDetails(id);
      return response.meals;
      // setRecipesDetails(response.meals);
    }
    const response = await fetchDrinkDetails(id);
    return response.drinks;
    // setRecipesDetails(response.drinks);
  };
  const getDetails = async () => {
    const response = await fetchDetails();
    getMeasureAndIngridient(response);
  };

  useEffect(() => {
    // setIsChecked(ingredientRecipe.some((w) => w === ingredient));
    getDetails();
  }, []);
  // ({ ingredient: '', checked: false })
  // e.checked = !e.checked;

  let stepDoneAll = [];
  const handleChange = ({ target }) => {
    const stepDone = getName('inProgressRecipes')
      ? getName('inProgressRecipes')
      : ({
        cocktail: {},
        meals: {} });
    // const stepDone2 = [{ ingredient: target.name }];
    const stepDone2 = [target.name];
    stepDoneAll = [...stepDoneAll, ...stepDone2];
    // console.log('stepdone', stepDone);

    if (location.pathname.includes('foods')) {
      stepDone.meals[id] = [...stepDoneAll];
      console.log(stepDone);
      setName('inProgressRecipes', stepDone);
    } else {
      stepDone.cocktail[id] = stepDone;
      setName('inProgressRecipes', stepDone);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="ingredientCss">
      {
        <ul>
          {
            ingredient.map((e, index) => (
              // if (measure[e] === null || recipesDetails[0][e] === '') {
              //   return '';
              // }
              <li
                key={ e }
                data-testid="ingredient-step"
              >
                <label htmlFor={ e } key={ e }>
                  <input
                    name={ e }
                    onChange={ handleChange }
                    type="checkbox"
                    id={ e }
                  />
                  {/* { recipesDetails[0][e]} */}
                  { `${e}-${measure[index]}`}
                </label>
              </li>
            ))
          }
        </ul>
      }
      <button
        type="button"
        disabled
        data-testid="finish-recipe-btn"
      >
        Finish Recipes
      </button>
    </div>
  );
}

export default RecipeInProgress;
