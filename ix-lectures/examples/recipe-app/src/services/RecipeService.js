import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Recipe } from '../models/Recipe';

class RecipeService {
  constructor() {
    this.collection = 'recipes';
  }

  async createRecipe(recipe) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      title: recipe.title,
      instructions: recipe.instructions,
    });

    recipe.id = docRef.id;
    return recipe;
  }

  async fetchRecipes() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const recipes = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const recipe = new Recipe(doc.id, data.title, data.instructions);

      recipes.push(recipe);
    });

    return recipes;
  }

  async updateRecipes(recipe) {
    const docRef = doc(db, this.collection, recipe.id);

    await updateDoc(docRef, {
      name: recipe.title,
      complete: recipe.instructions,
    });

    return recipe;
  }

  async deleteRecipe(recipeId) {
    const docRef = doc(db, this.collection, recipeId);

    await deleteDoc(docRef);
  }
}

const service = new RecipeService();

export default service;
