import NavigationBar from "../components/NavigationBar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { backgroundColor } from "../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
});
