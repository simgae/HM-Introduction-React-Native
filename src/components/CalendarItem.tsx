import { Recipe } from "../models/Recipe";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { hmColor } from "../constants/colors";
import { font } from "../constants/fonts";

/**
 * A functional component that displays a calendar item with a date and a recipe.
 *
 * @param {Object} props - The props object.
 * @param {Date} props.date - The date associated with the calendar item.
 * @param {Recipe} props.recipe - The recipe to display, including its title, description, and optional image.
 *
 * @returns {JSX.Element} A styled view containing the date, recipe title, description, and an image.
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
      <View style={styles.row}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image
          style={styles.image}
          source={
            recipe.image
              ? { uri: recipe.image }
              : require("../../assets/chef.jpg")
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    backgroundColor: hmColor,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  row: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    fontFamily: font,
  },
  image: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 25,
    marginLeft: "auto",
  },
});
