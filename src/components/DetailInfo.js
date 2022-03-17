import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealsDetails, fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function DetailInfo() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { favorite,
    setFavorite } = useContext(recipesContext);
  const url = window.location.href;
  const [message, setMessage] = useState(false);

  const title = location.pathname.includes('foods')
    ? 'strMeal'
    : 'strDrink';
  const image = location.pathname.includes('foods')
    ? 'strMealThumb'
    : 'strDrinkThumb';

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleShare = () => {
    const TWO_SECONDS = 2000;
    setMessage(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => setMessage(false), TWO_SECONDS);
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

  const teste2 = (param) => {
    const response2 = param;
    return response2;
  };

  const teste = async () => {
    const response = await fetchDetails();
    return response;
    // teste2(response);
  };
  useEffect(() => {
    teste();
  }, []);

  return (
    <div>
      {console.log(teste)}
      {
        teste.length > 0 && (
          <div>
            {/* imagem da receita */}
            <img
              data-testid="recipe-photo"
              src={ teste[0][image] }
              alt="recipe"
            />
            {/* titulo da receita  */}
            <h1 data-testid="recipe-title">
              {teste[0][title] }
            </h1>
            {/* botao de compartilhar */}
            <input
              type="image"
              data-testid="share-btn"
              src={ shareIcon }
              alt="share"
              onClick={ handleShare }
            />
            {message ? <span>Link copied!</span> : null}
            <input
              type="image"
              data-testid="favorite-btn"
              onClick={ handleFavorite }
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }
            />
            {/* texto da categoria */}
            { location.pathname.includes('foods')
            && <p data-testid="recipe-category">{teste[0].strCategory}</p>}

            { location.pathname.includes('drinks')
            && <p data-testid="recipe-category">{teste[0].strAlcoholic}</p>}
            <p data-testid="instructions">
              { teste[0].strInstructions}
            </p>
          </div>
        )
      }
    </div>
  );
}

export default DetailInfo;
