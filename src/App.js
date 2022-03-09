import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import DrinkDetails from './pages/DrinkDetails';
import DoneRecipes from './pages/DoneRecipes';
import DrinkInProgress from './pages/DrinkInProgress';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksByIngredient from './pages/ExploreDrinksByIngredient';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsByIngredient from './pages/ExploreFoodsByIngredient';
import Login from './pages/Login';
import FoodInProgress from './pages/FoodInProgress';
import Foods from './pages/Foods';
import FoodDetails from './pages/FoodDetails';
import ExploreFoodsByNationality from './pages/ExploreFoodsByNationality';
import Profile from './pages/Profile';
import FavoritesRecipes from './pages/FavoritesRecipes';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/foods"
            component={ Foods }
          />
          <Route
            exact
            path="/drinks"
            component={ Drinks }
          />
          <Route
            exact
            path="/foods/:id"
            component={ FoodDetails }
          />
          <Route
            exact
            path="/drinks/:id"
            component={ DrinkDetails }
          />
          <Route
            exact
            path="/foods/:id/in-progress"
            component={ FoodInProgress }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ DrinkInProgress }
          />
          <Route
            exact
            path="/explore"
            component={ Explore }
          />
          <Route
            exact
            path="/explore/foods"
            component={ ExploreFoods }
          />
          <Route
            exact
            path="/explore/drinks"
            component={ ExploreDrinks }
          />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsByIngredient }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksByIngredient }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsByNationality }
          />
          <Route
            exact
            path="/profile"
            component={ Profile }
          />
          <Route
            exact
            path="/done-recipes"
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/favorite-recipes"
            component={ FavoritesRecipes }
          />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
