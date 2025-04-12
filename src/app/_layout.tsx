import { Stack } from "expo-router";
import RecipeProvider from "../context/RecipeProvider";

/**
 * The `Layout` component serves as the root layout for the application.
 * It wraps the application with the `RecipeProvider` context to manage
 * recipe-related state and renders a `Stack` navigator with the header
 * hidden for all screens.
 *
 * @returns {JSX.Element} The layout component containing the provider and stack navigator.
 */
export default function Layout() {
  return (
    <RecipeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </RecipeProvider>
  );
}
