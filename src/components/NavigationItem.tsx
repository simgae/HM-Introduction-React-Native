import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { iconColor } from "../constants/colors";
import { font } from "../constants/fonts";
import { iconSize, navigationBarDescriptionFontSize } from "../constants/sizes";

interface NavigationItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  onPress: () => void;
}

export default function NavigationItem({
  icon,
  description,
  onPress,
}: NavigationItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={icon} size={iconSize} color={iconColor} />
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

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
