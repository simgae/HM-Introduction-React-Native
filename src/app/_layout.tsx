import { Stack } from "expo-router";
import RecipeProvider from "../context/RecipeProvider";

export default function Layout() {
  return (
    <RecipeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </RecipeProvider>
  );
}
