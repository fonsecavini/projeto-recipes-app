import React, { useContext, useEffect } from 'react';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';

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
      const measures2 = measures1.map((e) => {
        if (recipesDetails[0][e] === null) return '';
        return recipesDetails[0][e];
      });

      //   .filter((key) => key.includes('strMeasure'))
      //   .map((e) => (recipesDetails[0][e]))
      //   .filter((measur) => measure !== '' || measure !== null);
      setMeasure(measures2);
      // console.log('measure3', measures3);

      const ingredients = Object.keys(recipesDetails[0]);
      const ingredients1 = ingredients.filter((key) => key.includes('strIngredient'));
      const ingredients2 = ingredients1.map((e) => (recipesDetails[0][e]));
      const ingredients3 = ingredients2
        .filter((item) => item !== '' && item !== ' ' && item !== null);
      setingredient(ingredients3);
      // console.log('ingredients3', ingredients3);
    }
  };

  useEffect(() => {
    getMeasureAndIngridient();
    return () => {
      setMeasure([]);
    };
  }, []);
  // { if (measure[index] === undefined) {
  //   return '';
  // } }
  return (
    <div className="ingredientCss">
      <ul>
        {
          ingredient.map((e, index) => (
            <li
              key={ e }
              data-testid={
                `${index}-ingredient-name-and-measure`
              }
            >
              {/* { recipesDetails[0][e]} */}
              { `${e}-${measure[index]}`}
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default IngredientsList;
