import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchByNationalities,
  fetchRecipesByArea,
  fetchRecipesAll,
} from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';

function ExploreByNationalities() {
  const { areaFoods,
    setAreaFoods,
    recipesArea,
    setRecipesArea,
  } = useContext(recipesContext);
  /* const history = useHistory(); */
  const fetchNationalitties = () => {
    fetchByNationalities().then((response) => setAreaFoods(response.meals));
  };

  const fetchByArea = async ({ target: { value } }) => {
    console.log(value);
    if (value === 'All') {
      const response = await fetchRecipesAll();
      setRecipesArea(response.meals);
      console.log(recipesArea);
    }
    const response = await fetchRecipesByArea(value);
    setRecipesArea(response.meals);
    console.log(recipesArea);
  };

  useEffect(() => {
    fetchNationalitties();
  }, []);

  const TWELVE = 12;
  return (
    <div>
      <select
        name="select"
        onChange={ fetchByArea }
        data-testid="explore-by-nationality-dropdown"
      >
        {
          areaFoods.map((area) => (
            <option
              key={ `${area.strArea}` }
              value={ `${area.strArea}` }
              data-testid={ `${area.strArea}-option` }
            >
              { `${area.strArea}` }
            </option>
          ))
        }
        <option
          value="All"
          data-testid="All-option"
          selected
        >
          All
        </option>
      </select>
      <section>
        {
          recipesArea.slice(0, TWELVE).map((recipes, index) => (
            <Link
              key={ recipes.strMeal }
              className="card"
              to={ `/foods/${recipes.idMeal}` }
              value={ recipes.strMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                id={ recipes.idMeal }
                src={ recipes.strMealThumb }
                alt="FoodsExplore"
                width="200"
              />
              <h2
                id={ recipes.idMeal }
              >
                { recipes.strMeal }
              </h2>
            </Link>
          ))
        }
      </section>
    </div>
  );
}

export default ExploreByNationalities;
