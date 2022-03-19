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
    measure,
    setMeasure,
    setingredient,
    ingredient,
  } = useContext(recipesContext);

  const [isChecked, setIsChecked] = useState([]);

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
      const check = ingredients3.map((e) => e.length < 1);
      setIsChecked(check);
    }
  };

  const fetchDetails = async () => {
    if (location.pathname.includes('foods')) {
      const response = await fetchMealsDetails(id);
      return response.meals;
    }
    const response = await fetchDrinkDetails(id);
    return response.drinks;
  };

  const getDetails = async () => {
    const response = await fetchDetails();
    getMeasureAndIngridient(response);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleChange = ({ target }, index) => {
    const teste3 = isChecked.map((e, i) => {
      if (index === i) return !e;
      return e;
    });
    console.log(teste3);
    const stepDone = getName('inProgressRecipes')
      ? getName('inProgressRecipes')
      : ({
        cocktail: {},
        meals: {} });

    if (location.pathname.includes('foods')) {
      const stepDone2 = [target.name];
      let stepDoneAll = stepDone.meals[id]
        ? stepDone.meals[id]
        : stepDone.meals[id] = [];
      stepDoneAll = [...stepDoneAll, ...stepDone2];
      stepDone.meals[id] = [...stepDoneAll];
      setName('inProgressRecipes', stepDone);
    } else {
      const stepDone2 = [target.name];
      let stepDoneAll = stepDone.cocktail[id]
        ? stepDone.cocktail[id]
        : stepDone.cocktail[id] = [];
      stepDoneAll = [...stepDoneAll, ...stepDone2];
      stepDone.cocktail[id] = stepDoneAll;
      setName('inProgressRecipes', stepDone);
    }
    setIsChecked(teste3);
  };

  return (
    <div className="ingredientCss">
      { console.log(isChecked) }
      {' '}
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
                <label
                  htmlFor={ e }
                  key={ e }
                  className={ isChecked[index] ? 'stepDone' : 'stepToDone' }
                >
                  <input
                    name={ e }
                    checked={ isChecked[index] }
                    onChange={ (target) => handleChange(target, index) }
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
