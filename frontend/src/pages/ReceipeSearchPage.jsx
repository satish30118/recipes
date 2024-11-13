import React, { useState } from "react";
import { searchRecipes } from "../api/mealdb";

function RecipeSearchPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  const toggleFavorite = (recipe) => {
    if (favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Search Recipes</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-1/2"
          placeholder="Enter recipe name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="border rounded-lg p-4 shadow-lg bg-white relative"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-2 text-xl font-semibold">{recipe.strMeal}</h2>
            <p className="text-gray-600">{recipe.strArea}</p>
            <button
              className="absolute top-4 right-4"
              onClick={() => toggleFavorite(recipe)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  favorites.some((fav) => fav.idMeal === recipe.idMeal)
                    ? "red"
                    : "none"
                }
                viewBox="0 0 24 24"
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 18.364a9 9 0 1113.758 0L12 21l-6.879-2.636z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {favorites.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Favorite Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <div
                key={favorite.idMeal}
                className="border rounded-lg p-4 shadow-lg bg-white"
              >
                <img
                  src={favorite.strMealThumb}
                  alt={favorite.strMeal}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="mt-2 text-xl font-semibold">{favorite.strMeal}</h2>
                <p className="text-gray-600">{favorite.strArea}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeSearchPage;
