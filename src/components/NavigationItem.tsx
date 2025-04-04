import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { iconColor } from "../constants/colors";
import { font } from "../constants/fonts";
import { iconSize, navigationBarDescriptionFontSize } from "../constants/sizes";

interface NavigationItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  onPress: () => void;
}

/**
 * A functional component that renders a navigation item with an icon and a description.
 * The item is wrapped in a touchable area to handle user interactions.
 *
 * @param {NavigationItemProps} props - The props for the NavigationItem component.
 * @param {string} props.icon - The name of the icon to display, compatible with Ionicons.
 * @param {string} props.description - The text description displayed below the icon.
 * @param {() => void} props.onPress - The callback function triggered when the item is pressed.
 *
 * @returns {JSX.Element} A styled navigation item component.
 */
export default function NavigationItem({
  icon,
  description,
  onPress,
}: NavigationItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={iconSize} color={iconColor} />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

/**
 * Styles for the NavigationItem component.
 *
 * @property container - Style for the container of the component, ensuring it takes up full space
 * and centers its children both vertically and horizontally.
 * @property description - Style for the description text, including color, font size, text alignment,
 * margin, and font family. The `iconColor`, `navigationBarDescriptionFontSize`, and `font` variables
 * are used to dynamically set the respective style properties.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    color: iconColor,
    fontSize: navigationBarDescriptionFontSize,
    textAlign: "center",
    marginTop: 4,
    fontFamily: font,
  },
});
