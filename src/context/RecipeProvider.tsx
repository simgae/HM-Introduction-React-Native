import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: The main usage of a provider in React is to provide a context to its children.
  // But by doing it this way, we create only a read access to the data behind the context.
  // @see:  https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree
  // Yes, we cann call `setRecipe` from the context, but the change will not be reflected in the provider.

  // To reflect the changes in the provider, we need to use a state and pass it down to the context.
  // This way, we can use the context to read the data and the provider to update it.
  // @see: https://react.dev/reference/react/useContext#updating-data-passed-via-context

  return (
    <RecipeContext.Provider value={useContext(RecipeContext)}>
      {children}
    </RecipeContext.Provider>
  );
}
