import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecipeContext.Provider value={useContext(RecipeContext)}>
      {children}
    </RecipeContext.Provider>
  );
}
