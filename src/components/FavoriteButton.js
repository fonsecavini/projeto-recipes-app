import React, { useContext, useLocation } from 'react';
import recipesContext from '../context/RecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton() {
  const location = useLocation();
  const { favorite, setFavorite } = useContext(recipesContext);

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
            {/* texto da categoria */}
            { location.pathname.includes('foods')
              && <p data-testid="recipe-category">{recipesDetails[0].strCategory}</p>}

            { location.pathname.includes('drinks')
              && <p data-testid="recipe-category">{recipesDetails[0].strAlcoholic}</p>}

            { favorite
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
              )}
          </div>
        )
      }
    </div>
  );
}

export default FavoriteButton;
