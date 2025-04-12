import { createContext, useContext } from "react";
import { Recipe } from "../models/Recipe";

type RecipeContextType = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  setRecipes: (() => {}) as React.Dispatch<React.SetStateAction<Recipe[]>>,
});

export const useRecipes = () => useContext(RecipeContext);
