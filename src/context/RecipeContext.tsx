import { createContext, useContext } from "react";
import { Recipe } from "../models/Recipe";

type RecipeContextType = {
  recipes: Recipe[];
  setRecipies: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  setRecipies: (() => {}) as React.Dispatch<React.SetStateAction<Recipe[]>>,
});

export const useRecipes = () => useContext(RecipeContext);
