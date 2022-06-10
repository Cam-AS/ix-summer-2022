import React, { useState, useEffect } from 'react';

import { Recipe } from '../../models/Recipe';

import RecipeForm from '../RecipeForm';
import RecipeList from '../RecipeList';

import RecipeService from '../../services/RecipeService';

export default function TaskPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    const recipes = await RecipeService.fetchRecipes();
    setRecipes(recipes);
  }

  async function addRecipe(title, instructions) {
    const recipe = await RecipeService.createRecipe(new Recipe(null, title, instructions));

    setRecipes([...recipes, recipe]);
  }

  return (
    <div>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
