import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { fetchMealsDetails, fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../css/details.css';

function DetailInfo() {
  const location = useLocation();
  // const id = location.pathname.split('/')[2];

  const { favorite, recipesDetails, handleFavorite } = useContext(recipesContext);
  const url = window.location.href;
  const [message, setMessage] = useState(false);
  console.log(recipesDetails[0].idMeal);

  const title = location.pathname.includes('foods')
    ? 'strMeal'
    : 'strDrink';
  const image = location.pathname.includes('foods')
    ? 'strMealThumb'
    : 'strDrinkThumb';

  const handleShare = () => {
    const TWO_SECONDS = 2000;
    setMessage(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => setMessage(false), TWO_SECONDS);
  };
  // const fetchDetails = async () => {
  //   if (location.pathname.includes('foods')) {
  //     const response = await fetchMealsDetails(id);
  //     return response.meals;
  //     // setRecipesDetailss(response.meals);
  //   }
  //   const response = await fetchDrinkDetails(id);
  //   return response.drinks;
  //   // setRecipesDetailss(response.drinks);
  // };

  // // const teste2 = (param) => {
  // //   const response2 = param;
  // //   return response2;
  // // };

  // const teste = async () => {
  //   const response = await fetchDetails();
  //   return response;
  //   // teste2(response);
  // };
  // useEffect(() => {
  //   teste();
  // }, []);

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
              value={ recipesDetails[0] }
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }
            />
            {/* texto da categoria */}
            { location.pathname.includes('foods')
            && <p data-testid="recipe-category">{recipesDetails[0].strCategory}</p>}

            { location.pathname.includes('drinks')
            && <p data-testid="recipe-category">{recipesDetails[0].strAlcoholic}</p>}
            <p data-testid="instructions">
              { recipesDetails[0].strInstructions}
            </p>
          </div>
        )
      }
    </div>
  );
}

export default DetailInfo;
