import { ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "./TopTabs/All";
import Appetizers from "./TopTabs/Appetizers";
import MainCourse from "./TopTabs/MainCourse";
import Dessert from "./TopTabs/Dessert";
import Starters from "./TopTabs/Starters";

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
      screenOptions={({ route }) => ({
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 120 },
        tabBarStyle: { backgroundColor: "#050236" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "orange",
          height: 5,
          borderRadius: 100,
        },
      })}
    >
      {TabData.map((tabs, index) => (
        <Tab.Screen name={tabs.name} component={tabs.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTab;
