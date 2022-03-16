import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';

function RecipeInProgress() {
  const {
    recipesDetails,
    measure,
    setMeasure,
    setingredient,
    ingredient,
  } = useContext(recipesContext);

  const getMeasureAndIngridient = () => {
    if (recipesDetails.length > 0) {
      const measures = Object.keys(recipesDetails[0])
        .filter((key) => key.includes('strMeasure'))
        .map((e) => (recipesDetails[0][e]));
      setMeasure(measures);

      const ingredients = Object.keys(recipesDetails[0])
        .filter((key) => key.includes('strIngredient'))
        .map((e) => (recipesDetails[0][e]));
      setingredient(ingredients);
    }
  };

  useEffect(() => {
    getMeasureAndIngridient();
  }, [recipesDetails]);

  return (
    <div>
      <ul>
        {
          measure.map((e, index) => {
            if (measure[e] === null || recipesDetails[0][e] === '') {
              return '';
            }
            return (
              <div key={ ingredient[index] }>
                <input
                  id={ ingredient[index] }
                  type="checkbox"
                  key={ e }
                  data-testid={
                    `${index}-ingredient-name-and-measure`
                  }
                />
                <label htmlFor={ ingredient[index] }>
                  {/* { recipesDetails[0][e]} */}
                  { ` ${ingredient[index]}-${e}`}
                </label>
              </div>
            );
          })
        }
      </ul>
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
