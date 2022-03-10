import React from 'react';
import Footer from '../components/BottomMenu';
import FoodCategories from '../components/FoodCategories';
import FoodList from '../components/FoodList';
import Header from '../components/Header';

function Foods() {
  return (
    <div>
      <Header title="Foods" />
      <FoodCategories />
      <FoodList />
      <Footer />
    </div>
  );
}

export default Foods;
