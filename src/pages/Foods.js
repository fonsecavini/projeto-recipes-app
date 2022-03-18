import React from 'react';
import Footer from '../components/BottomMenu';
import FoodCategories from '../components/FoodCategories';
import FoodList from '../components/FoodList';
import Header from '../components/Header';
import '../css/details.css';

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

// Adicionando comentário para dar push
