import React, { useContext } from 'react';

function Detail() {
  const { recipesDetails: {
    strMealThumb,
    strCategory,
    strMeal,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
    strYoutube,

  } } = useContext(recipesContext);
  return (
    <div>
      {/* imagem da receita */}
      <img data-testid="recipe-photo" src={ strMealThumb } />
      {/* titulo da receita */}
      <h1 data-testid="recipe-title">{strMeal}</h1>
      {/* botao de compartilhar */}
      <button type="button" data-testid="share-btn" />
      {/* botao de favoritar       */}
      <button type="button" data-testid="favorite-btn" />
      {/* texto da categoria */}
      <p data-testid="recipe-category">{strCategory}</p>
      {/* lista dos ingredientes */}
      <ul>
        {
          recipesDetails.filter((ingredientes) => ingredientes.includes('strMeasure'))
            .map((e) => (
              <li key={ idMeal } data-testid={ `${index}-${e}` }>{e}</li>
            ))
        }

      </ul>
      {/* texto de instruçoes da receita */}
      <p data-testid="instructions" />
      {/* video da receita */}

      {/* card de receitas */}

      {/* botao de inicio da receita */}
      <button data-testid="start-recipe-btn" />
    </div>
  );
}

export default Detail;
