import { View } from "react-native";
import { StyleSheet } from "react-native";
import { hmColor } from "../constants/colors";
import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <NavigationItem
        icon="home"
        description="Home"
        onPress={
          () => console.log("Home pressed")
          // TODO: Navigate to Home Screen
        }
      />
      <NavigationItem
        icon="add"
        description="New Recipe"
        onPress={
          () => console.log("Add pressed")
          // TODO: Navigate to Add Recipe Screen
        }
      />
      <NavigationItem
        icon="list"
        description="My Recipes"
        onPress={
          () => console.log("List pressed")
          // TODO: Navigate to My Recipes Screen
        }
      />
      <NavigationItem
        icon="search"
        description="Search Recipe"
        onPress={
          () => console.log("Search pressed")
          // TODO: Navigate to Search Recipe Screen
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: hmColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    bottom: 0,
    height: 80,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // Negative height for top shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
});
