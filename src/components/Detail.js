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
import IngredientsList from './IngredientsList';
import '../css/details.css';

function Detail() {
  const {
    recipesDetails, favorite, setFavorite, setRecipesDetails, setRecomendationMount,
    recomendationMount,
    // started, setStarted,
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
        getDrinksRecomendations();
        fetchMealsDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.meals);
        });
      } else {
        getMealsRecomendations();
        fetchDrinkDetails(location.pathname.split('/')[2]).then((response) => {
          setRecipesDetails(response.drinks);
        });
      }
    };

    fetchDetails();
  }, []);

  const title = location.pathname.includes('foods')
    ? 'strMeal'
    : 'strDrink';
  const image = location.pathname.includes('foods')
    ? 'strMealThumb'
    : 'strDrinkThumb';

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      {console.log(recipesDetails)}
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
            { location.pathname.includes('foods')
            && <p data-testid="recipe-category">{recipesDetails[0].strCategory}</p>}

            { location.pathname.includes('drinks')
            && <p data-testid="recipe-category">{recipesDetails[0].strAlcoholic}</p>}

            {<IngredientsList />}

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
            <div className="cardsRecomendation">
              <div className="cards-box">
                { recomendationMount.slice(0, SIX).map((card, index) => {
                  if (location.pathname.includes('foods')) {
                    return (
                      <DrinkCard
                        key={ card.idDrink }
                        dataTestid={ `${index}-recomendation-card` }
                        index={ index }
                        dataDrinks={ card }
                        strDrinkThumb={ card.strDrinkThumb }
                      />);
                  } return (
                    <FoodCard
                      key={ card.idMeal }
                      dataTestid={ `${index}-recomendation-card` }
                      index={ index }
                      dataMeals={ card }
                      strMealThumb={ card.strMealThumb }
                    />
                  );
                })}
              </div>
            </div>
            {/* botao de inicio da receita */}
            {
              <button
                className="StartRecipe"
                type="button"
                data-testid="start-recipe-btn"
              >
                Start recipe
              </button>
            }
          </div>)
      }
    </div>
  );
}

export default Detail;
