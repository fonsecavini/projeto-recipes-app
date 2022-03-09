import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import RecipesContext from '../context/RecipesContext';

function Header(props) {
  // const [searchEnable, setSearchEnable] = useState(true);
  const { title } = props;
  // const history = useHistory();

  const {
    searchEnable,
    setSearchEnable,
    enableSearchBar,
    setEnableSearchBar,
  } = useContext(RecipesContext);

  // const handleClick = () => {
  //   setSearchEnable(false);
  //   history.push('/profile');
  // };

  return (
    <div>
      {/* <input
        type="image"
        data-testid="profile-top-btn"
        alt="profile icon"
        src={ ProfileIcon }
        onClick={ handleClick }
      /> */}
      <Link
        to="/profile"
        onClick={ () => setSearchEnable(false) }
      >
        <img src={ ProfileIcon } data-testid="profile-top-btn" alt="profile icon" />
      </Link>

      {/* <button
        type="button"
        onClick={ handleClick }
      >
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="Search"
        />
      </button> */}

      <h2 data-testid="page-title">{ title }</h2>
      {
        searchEnable
        && (
          <button
            type="button"
            alt="searchicon"
            onClick={ () => setEnableSearchBar(!enableSearchBar) }
          >
            <img
              data-testid="search-top-btn"
              src={ SearchIcon }
              alt="Search"
            />
          </button>
        )
      }
      { enableSearchBar && <input
        data-testid="search-input"
        type="text"
        placeholder="Procure uma receita"
      />}
    </div>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
