import React from 'react';
import propTypes from 'prop-types';
import SearchBar from '../components/SearchBar';

function ExploreFoods(props) {
  const { history } = props;

  return (
    <div>

      <SearchBar history={ history } />
      <p>ExploreFoods</p>
    </div>
  );
}

ExploreFoods.propTypes = {
  history: propTypes.func.isRequired,
};
export default ExploreFoods;
