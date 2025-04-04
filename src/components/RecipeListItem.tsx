import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Recipe } from "../models/Recipe";
import { font } from "../constants/fonts";
import { hmColor } from "../constants/colors";

/**
 * A functional component that renders a recipe list item.
 *
 * @param {Object} props - The props object.
 * @param {Recipe} props.recipe - The recipe object containing details to display.
 * @returns {JSX.Element} A styled view containing the recipe's title, description, and an image.
 */
export default function RecipeListItem({ recipe }: { recipe: Recipe }) {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>
      <Image
        style={styles.image}
        source={
          recipe.image
            ? { uri: recipe.image }
            : require("../../assets/chef.jpg")
        }
      />
    </View>
  );
}

/**
 * Styles for the RecipeListItem component.
 *
 * @property container - The main container style for the component, arranged in a row with spacing, background color, padding, and alignment.
 * @property title - Style for the title text, including font size, weight, color, and family.
 * @property description - Style for the description text, with font size, color, and family.
 * @property texts - Style for the text container, ensuring proper alignment and justification.
 * @property image - Style for the image, including size, border radius, and alignment.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    backgroundColor: hmColor,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: font,
  },
  description: {
    fontSize: 16,
    color: "white",
    fontFamily: font,
  },
  texts: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    flex: 1,
    height: 80,
    borderRadius: 25,
    marginLeft: "auto",
  },
});
