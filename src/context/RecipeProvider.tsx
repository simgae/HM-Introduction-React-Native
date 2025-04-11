import { useState } from "react";
import { RecipeContext, useRecipes } from "./RecipeContext";
import { Recipe } from "../models/Recipe";

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recipes, setRecipies] = useState<Recipe[]>([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipies }}>
      {children}
    </RecipeContext.Provider>
  );
}
