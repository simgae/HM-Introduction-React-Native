import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { StyleSheet } from "react-native";
import { Recipe } from "../models/Recipe";
import { font } from "../constants/fonts";
import { hmColor } from "../constants/colors";
import React, { useState } from "react";

/**
 * A functional component that renders a recipe list item with a title, description, and an image.
 * The image can be tapped to display a modal with a larger view of the image.
 *
 * @param {Object} props - The props object.
 * @param {Recipe} props.recipe - The recipe object containing details such as title, description, and image URL.
 *
 * @returns {JSX.Element} The rendered RecipeListItem component.
 *
 * @remarks
 * - If the `recipe.image` is not provided, a default placeholder image is used.
 * - The modal is displayed with a fade animation and can be dismissed by tapping outside the image.
 *
 * @example
 * ```tsx
 * const recipe = {
 *   title: "Spaghetti Bolognese",
 *   description: "A classic Italian pasta dish.",
 *   image: "https://example.com/spaghetti.jpg",
 * };
 *
 * <RecipeListItem recipe={recipe} />
 * ```
 */
export default function RecipeListItem({ recipe }: { recipe: Recipe }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image
          style={styles.image}
          source={
            recipe.image
              ? { uri: recipe.image }
              : require("../../assets/chef.jpg")
          }
        />
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <Image
              style={styles.modalImage}
              source={
                recipe.image
                  ? { uri: recipe.image }
                  : require("../../assets/chef.jpg")
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

/**
 * Styles for the RecipeListItem component.
 *
 * @property container       The main container style for the list item, arranged in a row with spacing, background color, and padding.
 * @property title           Style for the title text, including font size, weight, color, and family.
 * @property description     Style for the description text, including font size, color, and family.
 * @property texts           Style for the text container, aligning text to the start and centering vertically.
 * @property image           Style for the image, including size, border radius, and alignment.
 * @property modalBackground Style for the modal background, covering the screen with a semi-transparent overlay.
 * @property modalImage      Style for the modal image, ensuring it resizes proportionally and fits within the modal.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
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
    maxWidth: "90%",
  },
  texts: {
    display: "flex",
    width: "60%",
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: 80,
    borderRadius: 25,
    marginLeft: "auto",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
});
