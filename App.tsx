import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

/**
 * The main entry point of the application.
 *
 * This functional component renders the root of the application,
 * including the main container and the `HomeScreen` component.
 *
 * @returns The root JSX element of the application.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

/**
 * Stylesheet for the application.
 *
 * @property container - The main container style.
 * @property container.flex - Defines the flex value to make the container expand to fill available space.
 * @property container.backgroundColor - Sets the background color of the container to white (#fff).
 * @property container.alignItems - Aligns child components to the center horizontally.
 * @property container.justifyContent - Aligns child components to the center vertically.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
