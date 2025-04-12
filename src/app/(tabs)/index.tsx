import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { backgroundColor } from "../../constants/colors";
import { font } from "../../constants/fonts";


/**
 * The `HomeScreen` component represents the main screen of the application.
 * It displays a header, an image, and a description to introduce the app's purpose.
 *
 * @returns A React component that renders the home screen layout.
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>The Crazy HM Chef</Text>
        <Image
          style={styles.image}
          source={require("../../../assets/chef.jpg")}
        />
        <Text style={styles.description}>
          Here you can find and collect the best recipes for your home made
          meals.
        </Text>
      </View>
    </View>
  );
}

/**
 * Styles for the HomeScreen component.
 *
 * @property container - The main container style that sets up a flex layout with a column direction,
 *                       a background color, and centers its children horizontally while aligning them
 *                       to the bottom vertically. It spans the full width and height of the screen.
 * @property content - A flex container that centers its children both horizontally and vertically,
 *                     spanning the full width and height of the screen.
 * @property header - Style for the header text, including a large bold font, custom font family,
 *                    bottom margin, and centered alignment.
 * @property image - Style for the image, setting its dimensions, making it circular with a border radius,
 *                   and adding a bottom margin.
 * @property description - Style for the description text, including a medium font size, custom font family,
 *                         bottom margin, and centered alignment.
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
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    fontFamily: font,
    marginBottom: 20,
    textAlign: "center",
  },
});
