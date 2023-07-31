import { ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "./TopTabs/All";
import Appetizers from "./TopTabs/Appetizers";
import MainCourse from "./TopTabs/MainCourse";
import Dessert from "./TopTabs/Dessert";
import Starters from "./TopTabs/Starters";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  const TabData = [
    {
      name: "All",
      component: All,
    },
    {
      name: "Appetizers",
      component: Appetizers,
    },
    {
      name: "MainCourse",
      component: MainCourse,
    },
    {
      name: "Dessert",
      component: Dessert,
    },
    {
      name: "Starters",
      component: Starters,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const isFocused = getFocusedRouteNameFromRoute(route);

        return {
          tabBarStyle: {
            backgroundColor: isFocused === route.name ? "#050236" : "white",
          },
        };
      }}
    >
      {TabData.map((tabs, index) => (
        <Tab.Screen name={tabs.name} component={tabs.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTab;
// tabBarScrollEnabled: true,
// tabBarActiveTintColor: "white",
// tabBarInactiveTintColor: "red",
// tabBarLabelStyle: { fontWeight: "bold" },
// tabBarStyle: { backgroundColor: "#050236" },
