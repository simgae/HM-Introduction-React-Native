import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import NavigationBar from "../components/NavigationBar";
import { backgroundColor } from "../constants/colors";
import React from "react";
import { font } from "../constants/fonts";
import RecipeListItem from "../components/RecipeListItem";
import { DBMealRecipe } from "../models/DBMealRecipe";
import { Recipe } from "../models/Recipe";

/**
 * The `SearchRecipe` component provides a user interface for searching recipes
 * using the MealDB API. It allows users to input a search term, fetch matching
 * recipes, and display the results in a scrollable list.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered `SearchRecipe` component.
 *
 * @remarks
 * - The component uses React state to manage the search input and the list of recipes.
 * - Recipes are fetched from the MealDB API based on the user's search term.
 * - If no recipes are found, a message is displayed to the user.
 *
 * @example
 * ```tsx
 * import SearchRecipe from './SearchRecipe';
 *
 * export default function App() {
 *   return <SearchRecipe />;
 * }
 * ```
 *
 * @dependencies
 * - `React` for state management and rendering.
 * - `View`, `Text`, `TextInput`, `TouchableOpacity`, `ScrollView` from `react-native` for UI components.
 * - `Ionicons` for the search icon.
 * - `RecipeListItem` for rendering individual recipe items.
 * - `NavigationBar` for the bottom navigation bar.
 *
 * @state
 * - `recipes` (`Recipe[]`): The list of recipes fetched from the API.
 * - `search` (`string`): The current search input value.
 *
 * @styles
 * - `styles.container`: The main container style.
 * - `styles.content`: The content wrapper style.
 * - `styles.header`: The style for the header text.
 * - `styles.searchBar`: The style for the search bar container.
 * - `styles.scrollView`: The style for the scrollable recipe list.
 * - `styles.description`: The style for the "No recipes found" message.
 */
export default function SearchRecipe() {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [search, setSearch] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Search Recipe</Text>
        <View style={styles.searchBar}>
          <TextInput
            value={search}
            placeholder="Search for a recipe"
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            onPress={async () => {
              const searchValue = search.trim();
              await fetch(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                  searchValue
              ).then((response) => {
                if (response.ok) {
                  response.json().then((data) => {
                    // Convert DBMealRecipe to Recipe
                    const recipes: Recipe[] = data.meals
                      ? data.meals.map((meal: DBMealRecipe) => ({
                          idMeal: meal.idMeal,
                          title: meal.strMeal,
                          description: meal.strArea,
                          image: meal.strMealThumb,
                        }))
                      : [];

                    setRecipes(recipes);
                  });
                } else {
                  console.log("Error fetching data");
                }
              });
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            gap: 16,
          }}
        >
          {recipes.length === 0 && (
            <Text style={styles.description}>No recipes found.</Text>
          )}
          {recipes.map((recipe) => (
            <RecipeListItem key={recipes.indexOf(recipe)} recipe={recipe} />
          ))}
        </ScrollView>
      </View>
      <NavigationBar />
    </View>
  );
}

/**
 * Styles for the `SearchRecipe` screen.
 *
 * @property container - The main container style with full width and height,
 *                       centered content, and a column layout.
 * @property content - The content wrapper with centered alignment, a gap
 *                     between elements, and a margin at the top.
 * @property header - The style for the header text, including font size,
 *                    weight, family, and bottom margin.
 * @property searchBar - The style for the search bar, including row layout,
 *                       padding, background color, shadow, and font properties.
 * @property scrollView - The style for the scrollable view, with padding and
 *                        background color matching the container.
 * @property description - The style for descriptive text, including font size,
 *                         family, color, and top margin.
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
    marginTop: 80,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    width: "80%",
    fontFamily: font,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: backgroundColor,
  },
  description: {
    fontSize: 18,
    fontFamily: font,
    textAlign: "center",
    color: "#666",
    marginTop: 10,
  },
});
