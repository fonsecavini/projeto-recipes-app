import React from 'react';
import propTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';

function ExploreDrinks(props) {
  const { history } = props;

  return (
    <div>
      {console.log(history)}

      <SearchBar history={ history } />
      <p>ExploreDrinks</p>
      <Header title="Explore Drinks" />
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: propTypes.func.isRequired,
};
export default ExploreDrinks;
