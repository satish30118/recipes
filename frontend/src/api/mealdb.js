const API_BASE = process.env.REACT_APP_MEALDB_API;

export const searchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_BASE}?s=${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.log("Error fetching recipes:", error);
    return [];
  }
};
