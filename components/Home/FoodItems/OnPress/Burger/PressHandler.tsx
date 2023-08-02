import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PressHandler = () => {
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate("OnPress", { foodName: "Burger" });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flex: 0.15,
          //   backgroundColor: "lightgreen",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
          <Ionicons name="chevron-back" size={32} color="white" />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          My Order
        </Text>
        <Ionicons name="ellipsis-horizontal" size={32} color="white" />
      </View>
      <View style={{ flex: 0.5, backgroundColor: "pink" }}></View>
      <View style={{ flex: 0.3, backgroundColor: "red" }} color="white"></View>
    </View>
  );
};

export default PressHandler;
