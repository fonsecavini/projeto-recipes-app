import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import { fetchMealsDetails, fetchDrinkDetails } from '../services/fetchApi';

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

  const getMeasureAndIngridient = (param) => {
    console.log(param);
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
  const teste = async () => {
    const response = await fetchDetails();
    getMeasureAndIngridient(response);
  };
  useEffect(() => {
    teste();
  }, []);

  return (
    <div>
      {
        <ul>
          {
            ingredient.map((e, index) => (
              // if (measure[e] === null || recipesDetails[0][e] === '') {
              //   return '';
              // }

              <div key={ e }>
                <input
                  id={ e }
                  type="checkbox"
                  key={ e }
                  data-testid={
                    `${index}-ingredient-name-and-measure`
                  }
                />
                <label htmlFor={ e }>
                  {/* { recipesDetails[0][e]} */}
                  { `${e}-${measure[index]}`}
                </label>
              </div>
            ))
          }
        </ul>
      }
      <button
        type="button"
        disabled
      >
        Finish Recipes
      </button>
    </div>
  );
}

export default RecipeInProgress;
