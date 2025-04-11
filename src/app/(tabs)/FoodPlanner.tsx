import { View, Text, ScrollView } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import { backgroundColor } from "../../constants/colors";
import { StyleSheet } from "react-native";
import CalendarItem from "../../components/CalendarItem";
import React, { useEffect } from "react";
import { Recipe } from "../../models/Recipe";
import { font } from "../../constants/fonts";

/**
 * FoodPlanner is a React functional component that displays a weekly food planner.
 * It fetches random recipes from an external API and associates them with each day of the week.
 *
 * @component
 * @returns {JSX.Element} The rendered FoodPlanner component.
 *
 * @remarks
 * - The component initializes with the current date and an empty list of recipes.
 * - It fetches 7 random recipes from "https://www.themealdb.com/api/json/v1/1/random.php" on mount.
 * - Recipes are displayed alongside their respective dates in a scrollable view.
 * - If a recipe is not available for a specific day, a placeholder message is shown.
 *
 * @example
 * ```tsx
 * import FoodPlanner from './FoodPlanner';
 *
 * export default function App() {
 *   return <FoodPlanner />;
 * }
 * ```
 *
 * @dependencies
 * - React
 * - React Native components: View, Text, ScrollView
 * - Custom components: CalendarItem, NavigationBar
 *
 * @state
 * - `today` (Date): The current date.
 * - `recipes` (Recipe[]): An array of recipes for the week.
 *
 * @hooks
 * - `useEffect`: Fetches recipes when the component mounts.
 *
 * @interface Recipe
 * - `id` (string): The unique identifier for the recipe.
 * - `title` (string): The name of the recipe.
 * - `description` (string): A brief description of the recipe.
 * - `image` (string): The URL of the recipe's image.
 */
export default function FoodPlanner() {
  const [today, _] = React.useState<Date>(new Date());
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  useEffect(() => {
    Array.from({ length: 7 }).forEach((_, index) => {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
        (response) => {
          if (response.ok) {
            response.json().then((data) => {
              // Convert DBMealRecipe to Recipe
              const recipe: Recipe = {
                id: data.meals[0].idMeal,
                title: data.meals[0].strMeal,
                description: data.meals[0].strArea,
                image: data.meals[0].strMealThumb,
              };

              setRecipes((prevRecipes) => {
                const newRecipes = [...prevRecipes];
                newRecipes[index] = recipe;
                return newRecipes;
              });
            });
          }
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Food Planner</Text>
        <ScrollView style={styles.scrollView}>
          {Array.from({ length: 7 }).map((_, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <CalendarItem
                date={
                  new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + index
                  )
                }
                recipe={
                  recipes[index] ||
                  ({
                    title: "No recipe found",
                    description: "No description available",
                  } as Recipe)
                }
              ></CalendarItem>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

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
    marginTop: 80,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: backgroundColor,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
});
