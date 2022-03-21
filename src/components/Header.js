import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import '../css/header.css';

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
    <div className="container-header">
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
        className="header-btn-search"
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

      <h2 data-testid="page-title" className="header-title">{ title }</h2>
      {
        searchEnable
        && (
          <input
            type="image"
            alt="searchicon"
            src={ SearchIcon }
            data-testid="search-top-btn"
            className="header-btn-profile"
            onClick={ () => setEnableSearchBar(!enableSearchBar) }
          />
        )
      }
      { enableSearchBar && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
