import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeMain from "../components/Home/HomeMain";
import FoodItems from "../components/Home/FoodItems";
import OnPress from "../components/Home/FoodItems/OnPress";
import PressHandler from "../components/Home/FoodItems/PressHandler";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="FoodItems" component={FoodItems} />
      <Stack.Screen name="OnPress" component={OnPress} />
      <Stack.Screen name="PressHandler" component={PressHandler} />
    </Stack.Navigator>
  );
};

export default Home;
