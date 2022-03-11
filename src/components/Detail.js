import React, { useContext } from 'react';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function Detail() {
  const { recipesDetails, favorite, setFavorite } = useContext(recipesContext);
  // const keys = recipesDetails.map((ingredientes) => Object
  // .keys(ingredientes));
  // const includeIngredient = keys.includes('strIngredient1');

  // const teste = recipesDetails.filter((title) => title === 'strMealThumb');

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>

      {
        recipesDetails.length > 0 && (
          <div>
            {/* {console.log('teste', teste)} */}
            {console.log('recipeDetails', recipesDetails)}
            {console.log('strMeal = titulo', recipesDetails[0].strMeal)}
            {/* imagem da receita */}
            <img
              data-testid="recipe-photo"
              src={ recipesDetails[0].strMealThumb }
              alt="recipe"
            />
            {/* titulo da receita  */}
            <h1 data-testid="recipe-title">
              {recipesDetails[0].strMeal}

            </h1>
            {/* botao de compartilhar */}
            <button
              type="button"
              data-testid="share-btn"
            >
              <img src={ shareIcon } alt="share" />
            </button>

            {/* botao de favoritar       */}
            {
              favorite
                ? (
                  <button
                    type="button"
                    data-testid="favorite-btn"
                    onClick={ handleFavorite }
                  >
                    <img src={ blackHeartIcon } alt="black heart" />
                  </button>

                )
                : (
                  <button
                    type="button"
                    data-testid="favorite-btn"
                    onClick={ handleFavorite }
                  >
                    <img src={ whiteHeartIcon } alt="white heart" />
                  </button>
                )
            }

            {/* texto da categoria */}
            <p data-testid="recipe-category">{recipesDetails[0].strCategory}</p>
            {/* {lista dos ingredientes */}
            <ul>
              {/* {
                recipesDetails[0].filter((ingredientes) => Object.keys(ingredientes)
                  .includes('strIngredient'))
                  .map((e) => (
                    <li key={ idMeal } data-testid={ `${index}-${e}` }>{e}</li>
                  ))
              } */}

            </ul>

            {/* {texto de instruçoes da receita} */}
            {/* <ul>
              {
                recipesDetails[0].filter((instruçoes) => Object.keys(instruçoes)
                  .includes('strMeasure'))
                  .map((e) => (
                    <li key={ idMeal } data-testid={ `${index}-${e}` }>{e}</li>
                  ))
              }

            </ul> */}
            {/* video da receita */}

            {/* card de receitas */}

            {/* botao de inicio da receita */}
            <button type="button" data-testid="start-recipe-btn">Start recipe</button>
          </div>)
      }
    </div>
  );
}

export default Detail;
