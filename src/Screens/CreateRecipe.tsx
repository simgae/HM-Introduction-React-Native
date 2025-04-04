import { Button, StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";
import NavigationBar from "../components/NavigationBar";
import { backgroundColor, hmColor } from "../constants/colors";
import { font } from "../constants/fonts";

function handleImageSelection() {
  // TODO: Implement image selection logic
}

function handleSaveEvent() {
  // TODO: Implement save event logic
}

export default function CreateRecipe() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Add a new Recipe</Text>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Recipe Name"
        />
        <TextInput
          style={[styles.input, styles.largeInput]}
          placeholder="Recipe Description"
          multiline
          numberOfLines={4}
        />
        <View style={styles.button}>
          <Button
            color="white"
            title="Select image"
            onPress={() => {
              handleImageSelection();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="white"
            title="Save Recipe"
            onPress={() => {
              handleSaveEvent();
            }}
          />
        </View>
      </View>
      <NavigationBar />
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
});
