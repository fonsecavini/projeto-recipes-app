import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { fetchMealsDetails, fetchDrinkDetails } from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../css/details.css';
import ShareButton from './ShareButton';

function DetailInfo() {
  const location = useLocation();
  const { id } = useParams();
  // const id = location.pathname.split('/')[2];

  const { favorite,
    recipesDetails,
    handleFavorite,
    setFavorite } = useContext(recipesContext);

  const title = location.pathname.includes('foods')
    ? 'strMeal'
    : 'strDrink';
  const image = location.pathname.includes('foods')
    ? 'strMealThumb'
    : 'strDrinkThumb';

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      if ((localStorage.getItem('favoriteRecipes')).includes(id)) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, []);
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
          <div className="container-datails-info">
            {/* imagem da receita */}
            <img
              className="details-image-recipe"
              data-testid="recipe-photo"
              src={ recipesDetails[0][image] }
              alt="recipe"
            />
            {/* titulo da receita  */}
            <h1 data-testid="recipe-title" className="title-recipes">
              {recipesDetails[0][title] }
            </h1>
            <div className="container-btn">
              {/* botao de compartilhar */}
              <ShareButton />
              {/* botao de favoritar */}
              <div>
                <input
                  className="btn-favorite"
                  type="image"
                  data-testid="favorite-btn"
                  onClick={ handleFavorite }
                  value={ recipesDetails[0] }
                  src={ favorite ? blackHeartIcon : whiteHeartIcon }
                  alt={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }
                />
              </div>
            </div>
            {/* texto da categoria */}
            { location.pathname.includes('foods')
            && (
              <p
                data-testid="recipe-category"
                className="container-recipe-introduction"
              >
                {recipesDetails[0].strCategory}
              </p>)}

            { location.pathname.includes('drinks')
            && (
              <p data-testid="recipe-category" className="container-recipe-introduction">
                {recipesDetails[0].strAlcoholic}
              </p>)}
            <p data-testid="instructions" className="container-recipe-introduction">
              { recipesDetails[0].strInstructions}
            </p>
          </div>
        )
      }
    </div>
  );
}

export default DetailInfo;
