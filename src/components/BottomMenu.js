import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/footer.css';
import RecipesContext from '../context/RecipesContext';

function Footer() {
  const { setSearchEnable } = useContext(RecipesContext);

  return (
    <footer data-testid="footer" className="footer">
      <Link
        to="/drinks"
        onClick={ () => setSearchEnable(false) }
      >
        <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drink" />
      </Link>
      <Link
        to="/explore"
        onClick={ () => setSearchEnable(false) }
      >
        <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore" />
      </Link>
      <Link
        to="/foods"
        onClick={ () => setSearchEnable(true) }
      >
        <img src={ mealIcon } data-testid="food-bottom-btn" alt="meal" />
      </Link>
    </footer>
  );
}

export default Footer;
