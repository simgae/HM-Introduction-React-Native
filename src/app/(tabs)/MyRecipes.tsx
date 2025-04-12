import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { backgroundColor } from "../../constants/colors";
import { font } from "../../constants/fonts";
import RecipeListItem from "../../components/RecipeListItem";
import { useRecipes } from "../../context/RecipeContext";

/**
 * The `MyRecipes` component renders a screen displaying a list of recipes.
 *
 * - If there are no recipes, it shows a message indicating that no recipes have been added yet.
 * - If recipes are available, it maps through the list and renders each recipe using the `RecipeListItem` component.
 *
 * The component is structured with a `ScrollView` for scrolling through the content
 * and a `NavigationBar` at the bottom for navigation purposes.
 *
 * @returns A React component that displays the user's recipes.
 */
export default function MyRecipes() {
  const { recipes } = useRecipes();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.header}>My Recipes</Text>
          {recipes.length === 0 && (
            <Text style={styles.description}>No recipes added yet.</Text>
          )}
          {recipes.map((recipe) => (
            <RecipeListItem key={recipe.id} recipe={recipe} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/**
 * Styles for the `MyRecipes` screen.
 *
 * @property container - The main container style with full flex layout, column direction,
 *                       centered alignment, and a background color.
 * @property content - The content wrapper style with centered alignment, full width and height,
 *                     and a gap between elements.
 * @property header - The header text style with bold font, large size, custom font family,
 *                    and centered alignment.
 * @property scrollView - The scrollable view style with padding, background color, and a top margin.
 * @property description - The description text style with medium font size, custom font family,
 *                         centered alignment, and a light gray color.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: backgroundColor,
    marginTop: 80,
  },
  description: {
    fontSize: 18,
    fontFamily: font,
    textAlign: "center",
    color: "#666",
    marginTop: 10,
  },
});
