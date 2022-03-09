import React from 'react';
import propTypes from 'prop-types';
import Footer from '../components/BottomMenu';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

function ExploreFoods(props) {
  const { history } = props;

  return (
    <div>

      <SearchBar history={ history } />
      <p>ExploreFoods</p>
      <Header title="Explore Foods" />
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: propTypes.func.isRequired,
};
export default ExploreFoods;
