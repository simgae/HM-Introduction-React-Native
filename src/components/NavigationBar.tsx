import { View } from "react-native";
import { StyleSheet } from "react-native";
import { hmColor } from "../constants/colors";
import NavigationItem from "./NavigationItem";

/**
 * NavigationBar is a functional component that renders a navigation bar
 * with multiple navigation items. Each item includes an icon, a description,
 * and an onPress handler for navigation or other actions.
 *
 * @component
 *
 * @example
 * ```tsx
 * <NavigationBar />
 * ```
 *
 * @remarks
 * This component currently logs messages to the console when navigation items
 * are pressed. Navigation functionality should be implemented in the `onPress`
 * handlers for each `NavigationItem`.
 *
 * @returns {JSX.Element} A view containing multiple `NavigationItem` components.
 *
 * @todo
 * - Implement navigation logic for each `onPress` handler to navigate to the
 *   respective screens (Home, Add Recipe, My Recipes, Search Recipe).
 */
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
      <NavigationItem
        icon="calendar"
        description="Food Planner"
        onPress={
          () => console.log("Calendar pressed")
          // TODO: Navigate to Food Planner Screen
        }
      />
    </View>
  );
}

/**
 * Styles for the NavigationBar component.
 *
 * @property container - The main container style for the navigation bar.
 * - `flexDirection`: Sets the layout direction to row for horizontal alignment.
 * - `backgroundColor`: Specifies the background color of the navigation bar.
 * - `alignItems`: Aligns items vertically in the center of the container.
 * - `justifyContent`: Distributes space evenly between and around items.
 * - `padding`: Adds padding inside the container.
 * - `bottom`: Positions the navigation bar at the bottom of the screen.
 * - `height`: Sets the height of the navigation bar.
 * - `width`: Sets the width of the navigation bar to span the full width of the screen.
 * - `borderTopLeftRadius`: Rounds the top-left corner of the navigation bar.
 * - `borderTopRightRadius`: Rounds the top-right corner of the navigation bar.
 * - `shadowColor`: Defines the color of the shadow (iOS).
 * - `shadowOffset`: Specifies the offset of the shadow (iOS), with a negative height for a top shadow.
 * - `shadowOpacity`: Sets the opacity of the shadow (iOS).
 * - `shadowRadius`: Defines the blur radius of the shadow (iOS).
 * - `elevation`: Adds elevation for shadow effect on Android.
 */
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
