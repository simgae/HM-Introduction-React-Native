import { useState } from "react";
import { RecipeContext } from "./RecipeContext";
import { Recipe } from "../models/Recipe";

/**
 * RecipeProvider is a context provider component that manages the state of recipes
 * and provides it to its child components. It uses React's Context API to share
 * the `recipes` state and the `setRecipes` function across the component tree.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will have access
 * to the recipes context.
 *
 * @remarks
 * This provider maintains an internal state (`recipes`) to store the list of recipes.
 * The state is necessary to trigger re-renders when updated, as the context alone
 * does not cause re-renders in React. The `recipes` state is initialized as an empty
 * array and can be updated using the `setRecipes` function.
 *
 * @returns {JSX.Element} A context provider component that wraps its children
 * and provides the `recipes` state and `setRecipes` function.
 */
export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: This state is absolutely necessary to force
  // a re-render of the component when the state changes
  // The context itself is not enough to trigger a re-render
  // and will only pass the data through the children
  // So normally without this state you have to pass the
  // `useContext` hook in the `value` field to the children
  // to pass the data.

  // Initialize the state with an empty array of recipes
  // The state will be used to store the recipes
  // and will be updated using the setRecipes function
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
}
