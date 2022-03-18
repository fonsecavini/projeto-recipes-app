import React from 'react';
import Header from '../components/Header';
import Footer from '../components/BottomMenu';
import DrinkList from '../components/DrinksList';
import DrinksCategories from '../components/DrinksCategories';
import '../css/details.css';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <Footer />
      <DrinksCategories />
      <DrinkList />
    </div>
  );
}

export default Drinks;
