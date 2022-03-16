import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';

function IngredientsList() {
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

      const ingridients = Object.keys(recipesDetails[0])
        .filter((key) => key.includes('strIngredient'))
        .map((e) => (recipesDetails[0][e]));
      setingredient(ingridients);
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
              <li
                key={ e }
                data-testid={
                  `${index}-ingredient-name-and-measure`
                }
              >
                {/* { recipesDetails[0][e]} */}
                { `${ingredient[index]}-${e}`}
              </li>
            );
          })
        }

      </ul>
    </div>
  );
}

export default IngredientsList;
