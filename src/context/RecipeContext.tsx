import { createContext, useContext } from "react";
import { Recipe } from "../models/Recipe";

/**
 * Represents the context type for managing recipes in the application.
 *
 * @typedef RecipeContextType
 *
 * @property {Recipe[]} recipes - An array of Recipe objects representing the current list of recipes.
 * @property {React.Dispatch<React.SetStateAction<Recipe[]>>} setRecipes - A function to update the state of the recipes array.
 */
type RecipeContextType = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

/**
 * Context for managing recipe-related state in the application.
 *
 * This context provides access to the list of recipes and a function to update the recipes.
 *
 * @typeParam RecipeContextType - The type defining the structure of the context value.
 * @property {Recipe[]} recipes - An array of recipes available in the context.
 * @property {React.Dispatch<React.SetStateAction<Recipe[]>>} setRecipes - A function to update the recipes state.
 */
export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  setRecipes: (() => {}) as React.Dispatch<React.SetStateAction<Recipe[]>>,
});

/**
 * Custom hook to access the RecipeContext.
 *
 * This hook provides a convenient way to consume the RecipeContext
 * within functional components. It abstracts the useContext call,
 * ensuring that the context is easily accessible throughout the application.
 *
 * @returns The value provided by the RecipeContext.
 *
 * @throws {Error} If the hook is used outside of a RecipeContext provider.
 */
export const useRecipes = () => useContext(RecipeContext);
