import { Button, StyleSheet, TextInput, Image } from "react-native";
import { View, Text } from "react-native";
import { backgroundColor, hmColor } from "../../constants/colors";
import { font } from "../../constants/fonts";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useRecipes } from "../../context/RecipeContext";

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

export default function CreateRecipe() {
  const { setRecipies, recipes } = useRecipes();

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
              console.log("Saving recipe...");
              setRecipies(() => [...recipes, recipe]);
              console.log("Recipe saved!");
              console.log(recipes);
              setRecipe({
                id: recipes.length,
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
