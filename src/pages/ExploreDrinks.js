import React from 'react';
import propTypes from 'prop-types';
import SearchBar from '../components/SearchBar';

function ExploreDrinks(props) {
  const { history } = props;

  return (
    <div>
      {console.log(history)}

      <SearchBar history={ history } />
      <p>ExploreDrinks</p>
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: propTypes.func.isRequired,
};
export default ExploreDrinks;
