import { Button, StyleSheet, TextInput, Image } from "react-native";
import { View, Text } from "react-native";
import { backgroundColor, hmColor } from "../../constants/colors";
import { font } from "../../constants/fonts";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";

/**
 * Handles the selection of an image from the device's media library.
 *
 * This function requests permission to access the media library. If the permission
 * is denied, it alerts the user and exits. If the permission is granted, it opens
 * the media library for the user to select an image. The selected image's URI is
 * returned if the selection is successful.
 *
 * @returns {Promise<string | undefined>} A promise that resolves to the URI of the selected image,
 * or `undefined` if the selection is canceled or permission is denied.
 *
 * @throws {Error} If an unexpected error occurs during the image selection process.
 */
async function handleImageSelection() {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access the media library is required!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }
}

/**
 * A React Native component that allows users to create and save a new recipe.
 *
 * This component provides input fields for the recipe's title, description, and an option
 * to select an image. Once the recipe is created, it is added to the list of recipes
 * managed by the `useRecipes` hook.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered CreateRecipe component.
 *
 * @remarks
 * - The `useRecipes` hook is used to manage the state of recipes.
 * - The `handleImageSelection` function is expected to be an asynchronous function
 *   that handles image selection and returns the URI of the selected image.
 *
 * @example
 * ```tsx
 * import CreateRecipe from './CreateRecipe';
 *
 * export default function App() {
 *   return <CreateRecipe />;
 * }
 * ```
 *
 */
export default function CreateRecipe() {
  const { setRecipes, recipes } = useRecipes();

  const [recipe, setRecipe] = useState({
    id: recipes.length,
    title: "",
    description: "",
    image: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Add a new Recipe</Text>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Recipe Name"
          value={recipe.title}
          onChangeText={(text) => {
            setRecipe({ ...recipe, title: text });
          }}
        />
        <TextInput
          style={[styles.input, styles.largeInput]}
          placeholder="Recipe Description"
          multiline
          numberOfLines={4}
          value={recipe.description}
          onChangeText={(text) => {
            setRecipe({ ...recipe, description: text });
          }}
        />
        <View style={styles.button}>
          <Button
            color="white"
            title="Select image"
            onPress={async () => {
              setRecipe({
                ...recipe,
                image: (await handleImageSelection()) || "",
              });
            }}
          />
        </View>
        {recipe.image ? (
          <Image source={{ uri: recipe.image }} style={styles.importedImage} />
        ) : null}
        <View style={styles.button}>
          <Button
            color="white"
            title="Save Recipe"
            onPress={() => {
              setRecipes([...recipes, recipe]);
              setRecipe({
                id: recipes.length + 1,
                title: "",
                description: "",
                image: "",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

/**
 * Stylesheet for the CreateRecipe component.
 *
 * @property container - The main container style with full width and height,
 *                       centered alignment, and a column layout.
 * @property content - The content wrapper style with centered alignment and
 *                     full width and height.
 * @property header - The header text style with bold font, large size, custom
 *                    font family, and centered alignment.
 * @property input - The input field style with a border, rounded corners,
 *                   padding, shadow, and custom font.
 * @property smallInput - A modifier for input fields with a smaller height.
 * @property largeInput - A modifier for input fields with a larger height.
 * @property button - The button style with a background color, rounded corners,
 *                    padding, shadow, and centered alignment.
 * @property importedImage - The style for an imported image with fixed width
 *                           and height, and bottom margin.
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
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
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
  smallInput: {
    height: 50,
  },
  largeInput: {
    height: 150,
  },
  button: {
    width: "50%",
    backgroundColor: hmColor,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  importedImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
