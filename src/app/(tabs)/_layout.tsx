import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { hmColor } from "../../constants/colors";
import { StyleSheet } from "react-native";
import {
  iconSize,
  navigationBarDescriptionFontSize,
  navigationBarHeight,
} from "../../constants/sizes";
import { font } from "../../constants/fonts";
import RecipeProvider from "../../context/RecipeProvider";
import { useState } from "react";
import { Recipe } from "../../models/Recipe";

export default function Layout() {

  const [recipes, setRecipies] = useState<Recipe[]>([]);

  return (
    <RecipeProvider value={{recipes, setRecipies}}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.container,
          tabBarLabelStyle: styles.description,
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
          tabBarAllowFontScaling: true,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "lightgray",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: () => {
              return <Ionicons name="home" style={styles.icon} />;
            },
          }}
        />

        <Tabs.Screen
          name="CreateRecipe"
          options={{
            title: "Create Recipe",
            tabBarLabel: "New Recipe",
            tabBarIcon: () => {
              return <Ionicons name="add-circle" style={styles.icon} />;
            },
          }}
        />

        <Tabs.Screen
          name="MyRecipes"
          options={{
            title: "My Recipes",
            tabBarLabel: "Recipes",
            tabBarIcon: () => {
              return <Ionicons name="list" style={styles.icon} />;
            },
          }}
        />

        <Tabs.Screen
          name="SearchRecipe"
          options={{
            title: "Search Recipe",
            tabBarLabel: "Search",
            tabBarIcon: () => {
              return <Ionicons name="search" style={styles.icon} />;
            },
          }}
        />

        <Tabs.Screen
          name="FoodPlanner"
          options={{
            title: "Food Planner",
            tabBarLabel: "Food Planner",
            tabBarIcon: () => {
              return <Ionicons name="calendar" style={styles.icon} />;
            },
          }}
        />
      </Tabs>
    </RecipeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: hmColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    bottom: 0,
    height: navigationBarHeight,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // Negative height for top shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  icon: {
    color: "white",
    fontSize: iconSize,
  },
  description: {
    fontSize: navigationBarDescriptionFontSize,
    fontFamily: font,
  },
});
