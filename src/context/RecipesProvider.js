import React from 'react';
import propTypes from 'prop-types';
import recipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  return (
    <recipesContext.Provider value={ [] }>
      { children }
    </recipesContext.Provider>
  );
}

export default RecipesProvider;

RecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
