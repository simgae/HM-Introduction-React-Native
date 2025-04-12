import { useState } from "react";
import { RecipeContext } from "./RecipeContext";
import { Recipe } from "../models/Recipe";

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: This state is absolutly necessary to force
  // a re-render of the component when the state changes
  // The context itself is not enough to trigger a re-render
  // and will only pass the data through the children
  // So normally without this state you have to pass the
  // `useContext` hook in the `value` field to the children
  // to pass the data.

  // Initialize the state with an empty array of recipes
  // The state will be used to store the recipes
  // and will be updated using the setRecipies function
  const [recipes, setRecipies] = useState<Recipe[]>([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipies }}>
      {children}
    </RecipeContext.Provider>
  );
}
