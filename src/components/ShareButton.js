import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import recipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const { recipesDetails } = useContext(recipesContext);
  const location = useLocation();
  const urlDrink = `http://localhost:3000/drinks/${recipesDetails[0].idDrink}`;
  const urlMeal = `http://localhost:3000/foods/${recipesDetails[0].idMeal}`;
  const [message, setMessage] = useState(false);

  const handleShare = () => {
    const TWO_SECONDS = 2000;
    setMessage(true);
    setTimeout(() => setMessage(false), TWO_SECONDS);
    if (location.pathname.includes('foods')) {
      navigator.clipboard.writeText(urlMeal);
    }
    if (location.pathname.includes('drinks')) {
      navigator.clipboard.writeText(urlDrink);
    }
  };

  return (
    <div>
      <input
        type="image"
        data-testid="share-btn"
        src={ shareIcon }
        alt="share"
        onClick={ handleShare }
      />
      {message ? <span>Link copied!</span> : null}
    </div>
  );
}

export default ShareButton;
