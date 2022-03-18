import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchByNationalities,
  fetchRecipesByArea,
  fetchRecommendationsMeals,
} from '../services/fetchApi';
import recipesContext from '../context/RecipesContext';
import '../css/details.css';

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

  const fetchAll = async () => {
    const response = await fetchRecommendationsMeals();
    setRecipesArea(response.meals);
    console.log(response.meals);
  };

  const fetchByArea = async ({ target: { value } }) => {
    console.log(value);
    if (value === 'All') {
      fetchAll();
    } else {
      const response = await fetchRecipesByArea(value);
      setRecipesArea(response.meals);
      console.log(response.meals);
    }
  };
  console.log(recipesArea);
  useEffect(() => {
    fetchNationalitties();
    fetchAll();
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
                data-testid={ `${index}-card-img` }
              />
              <h2
                id={ recipes.idMeal }
                data-testid={ `${index}-card-name` }
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
