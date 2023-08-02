import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import OnPress from "./FoodItems/OnPress";
import { useNavigation } from "@react-navigation/native";

const FoodItems = () => {
  const foodData = [
    {
      name: "Offers",
      icon: require("../../assets/cash.jpg"),
      id: 1,
    },
    {
      name: "Rice",
      icon: require("../../assets/rice2.jpg"),
      id: 2,
    },
    {
      name: "Pizza",
      icon: require("../../assets/pizza.jpg"),
      id: 3,
    },
    {
      name: "Coffee",
      icon: require("../../assets/coffee1.jpg"),
      id: 4,
    },
    {
      name: "Chicken",
      icon: require("../../assets/chicken.jpg"),
      id: 5,
    },
    {
      name: "Burger",
      icon: require("../../assets/urger1.jpg"),
      id: 6,
    },
    {
      name: "Boba",
      icon: require("../../assets/boba.jpg"),
      id: 7,
    },
    {
      name: "Salad",
      icon: require("../../assets/salad.jpg"),
      id: 8,
    },
  ];

  const navigation = useNavigation();

  const handlePress = (list) => {
    navigation.navigate("OnPress", { foodName: list.name });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {foodData.map((list, index) => (
        <TouchableOpacity
          activeOpacity={0.95}
          onPress={() => handlePress(list)}
          key={index}
          style={{
            borderWidth: 0.1,
            marginTop: index >= 4 ? 30 : 10,
            marginHorizontal: [0, 3, 4, 7].includes(index) ? 10 : 5, //if index is found in the array true is returned
            width: 90,
            height: 120,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgray",
            borderRadius: 30,
          }}
        >
          <Image
            source={list.icon}
            style={{
              borderWidth: 0.1,
              borderRadius: 80,
              width: 60,
              height: 60,
              margin: 16,
            }}
          />
          <Text>{list.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodItems;
