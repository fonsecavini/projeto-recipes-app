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

  console.log(recipesDetails[0]);

  // console.log(ingredients);

  const getMeasureAndIngridient = () => {
    if (recipesDetails.length > 0) {
      const measures = Object.keys(recipesDetails[0]);
      const measures1 = measures.filter((key) => key.includes('strMeasure'));
      const measures2 = measures1.map((e) => (recipesDetails[0][e]));
      const measures3 = measures2.filter((item) => item.length > 1);
      //   .filter((key) => key.includes('strMeasure'))
      //   .map((e) => (recipesDetails[0][e]))
      //   .filter((measur) => measure !== '' || measure !== null);
      setMeasure(measures3);
      // console.log('measure3', measures3);

      const ingredients = Object.keys(recipesDetails[0]);
      const ingredients1 = ingredients.filter((key) => key.includes('strIngredient'));
      const ingredients2 = ingredients1.map((e) => (recipesDetails[0][e]));
      const ingredients3 = ingredients2
        .filter((ingrediente) => ingrediente.length > 1);
      setingredient(ingredients3);
      // console.log('ingredients3', ingredients3);
    }
  };

  useEffect(() => {
    getMeasureAndIngridient();
    return () => {
      setMeasure([]);
      setingredient([]);
    };
  }, []);

  console.log(measure);

  return (
    <div>
      <ul>
        {
          measure.map((e, index) => (
            <li
              key={ ingredient[index] }
              data-testid={
                `${index}-ingredient-name-and-measure`
              }
            >
              {/* { recipesDetails[0][e]} */}
              { `${ingredient[index]}-${e}`}
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default IngredientsList;
