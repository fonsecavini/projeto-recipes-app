import React from 'react';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import ExploreByNationalities from '../components/ExploreByNationalities';
import '../css/details.css';

function ExploreFoodsByNationality() {
  return (
    <div>
      <Header title="Explore Nationalities" />
      <ExploreByNationalities />
      <Footer />
    </div>
  );
}

export default ExploreFoodsByNationality;
