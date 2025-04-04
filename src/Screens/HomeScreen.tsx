import NavigationBar from "../components/NavigationBar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { backgroundColor } from "../constants/colors";

/**
 * The `HomeScreen` component serves as the main screen of the application.
 * It renders a container with a navigation bar, providing the user with
 * access to various sections of the app.
 *
 * @component
 * @returns {JSX.Element} The rendered HomeScreen component.
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavigationBar />
    </View>
  );
}

/**
 * Styles for the HomeScreen component.
 *
 * @property container - The main container style:
 *   - `flex: 1`: Makes the container take up the full available space.
 *   - `flexDirection: "column"`: Arranges child components in a vertical column.
 *   - `backgroundColor`: Sets the background color of the container (value sourced from `backgroundColor` variable).
 *   - `alignItems: "center"`: Centers child components horizontally.
 *   - `justifyContent: "flex-end"`: Aligns child components to the bottom of the container.
 *   - `width: "100%"`: Sets the container width to 100% of the parent.
 *   - `height: "100%"`: Sets the container height to 100% of the parent.
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
});
