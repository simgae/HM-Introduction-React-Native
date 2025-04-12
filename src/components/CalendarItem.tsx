import { Recipe } from "../models/Recipe";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { hmColor } from "../constants/colors";
import { font } from "../constants/fonts";
import RecipeListItem from "./RecipeListItem";

/**
 * A functional component that renders a calendar item displaying a date and a recipe.
 *
 * @param {Object} props - The props object.
 * @param {Date} props.date - The date to be displayed in the calendar item.
 * @param {Recipe} props.recipe - The recipe associated with the calendar item.
 *
 * @returns {JSX.Element} A view containing the formatted date and a recipe list item.
 */
export default function CalendarItem({
  date,
  recipe,
}: {
  date: Date;
  recipe: Recipe;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {date.toDateString()} - {recipe.description}
      </Text>
      <RecipeListItem recipe={recipe} />
    </View>
  );
}

/**
 * Styles for the CalendarItem component.
 *
 * @property container - The main container style with full width, spacing between elements,
 * rounded corners, padding, and centered content with space between items.
 * @property date - The style for the date text, including font size, bold weight, and black color.
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
