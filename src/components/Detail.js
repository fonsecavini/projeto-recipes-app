import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DrinkCard from './DrinkCard';
import FoodCard from './FoodCard';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  fetchMealsDetails,
  fetchDrinkDetails,
  fetchRecommendationsDrinks,
  fetchRecommendationsMeals,
} from '../services/fetchApi';
import Player from './Player';

function Detail() {
  const {
    recipesDetails, favorite, setFavorite, setRecipesDetails, setRecomendationMount,
    recomendationMount,
  } = useContext(recipesContext);
  const location = useLocation();
  const SIX = 6;
  function getDrinksRecomendations() {
    fetchRecommendationsDrinks()
      .then((response) => setRecomendationMount(response.drinks));
  }

  function getMealsRecomendations() {
    fetchRecommendationsMeals()
      .then((response) => setRecomendationMount(response.meals));
  }

  useEffect(() => {
    const fetchDetails = async () => {
      if (location.pathname.includes('foods')) {
        getMealsRecomendations();
        fetchMealsDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.meals);
        });
      } else {
        getDrinksRecomendations();
        fetchDrinkDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.drinks);
        });
      }

      // fetchMealsDetails(location.pathname.split('/')[2]).then((response) => {
      //   if (location.pathname.includes('foods')) {
      //     setRecipesDetails(response.meals);
      //   } else {
      //     setRecipesDetails(response.drinks);
      //   }
      //   // const teste = location.pathname.includes('foods')
      //   //   ? setRecipesDetails(response.meals)
      //   //   : setRecipesDetails(response.drinks);
      //   // console.log(teste);
      // });
    };

    fetchDetails();
  }, []);

  const title = location.pathname.includes('foods')
    ? 'strMeal'
    : 'strDrink';
  const image = location.pathname.includes('foods')
    ? 'strMealThumb'
    : 'strDrinkThumb';
  // const SETE = 7;
  // const VINTE_SETE = 27;
  // const keys = recipesDetails.map((ingredientes) => Object
  // .keys(ingredientes));
  // const includeIngredient = keys.includes('strIngredient1');
  console.log(location.pathname.split('/')[2]);
  // const teste = recipesDetails.includes('strIngredient');
  // console.log(teste);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>

      {
        recipesDetails.length > 0 && (
          <div>
            {/* imagem da receita */}
            <img
              data-testid="recipe-photo"
              src={ recipesDetails[0][image] }
              alt="recipe"
            />
            {/* titulo da receita  */}
            <h1 data-testid="recipe-title">
              {recipesDetails[0][title] }

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
              {
                Object
                  .keys(recipesDetails[0])
                  .filter((key) => key.includes('strIngredient'))
                  .map((e, index) => {
                    if (recipesDetails[0][e] === null || recipesDetails[0][e] === '') {
                      return '';
                    }
                    return (
                      <li
                        key={ e }
                        data-testid={
                          `${index}-ingredient-name-and-measure`
                        }
                      >
                        { recipesDetails[0][e]}
                      </li>
                    );
                  })

                // filter((ingredientes) => Object.keys(ingredientes)
                //   .includes('strIngredient'))
                //   .map((e) => (
                //     <li key={ idMeal } data-testid={ `${index}-${e}` }>{e}</li>
                //   ))
              }

            </ul>

            {/* {texto de instruçoes da receita} */}
            <p data-testid="instructions">
              { recipesDetails[0].strInstructions}
            </p>

            {/* video da receita */}
            {/* fonte: https://www.youtube.com/watch?v=ckiaNqOrG5U&t=19s */}
            <Player
              url={ recipesDetails[0].strYoutube }
            />
            {/* card de receitas */}
            { recomendationMount.slice(0, SIX).map((card, index) => {
              if (location.pathname.includes('drinks')) {
                return (<DrinkCard
                  dataTestid={ `${index}-recomendation-card` }
                  key={ card.idDrink }
                  index={ index }
                  dataDrinks={ card }
                  strDrinkThumb={ card.strDrinkThumb }
                />);
              }
              return (<FoodCard
                dataTestid={ `${index}-recomendation-card` }
                key={ card.idMeal }
                index={ index }
                dataMeals={ card }
                strMealThumb={ card.strMealThumb }
              />);
            })}
            {/* botao de inicio da receita */}
            <button type="button" data-testid="start-recipe-btn">Start recipe</button>
          </div>)
      }
    </div>
  );
}

export default Detail;
