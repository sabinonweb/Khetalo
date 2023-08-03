import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Details from "./Details";
import Slider from "./Slider";
import BurgerPressHandler from "./OnPress/Burger/BurgerPressHandler";

const PressHandler = () => {
  const Navigation = useNavigation();
  const route = useRoute();
  const { foodname, price, display } = route.params;
  const handlePress = () => {
    Navigation.navigate("OnPress", { foodName: "Burger" });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "aquablue" }}>
      <View
        style={{
          flex: 0.05,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 600, color: "black" }}>
          My Order
        </Text>
        <Ionicons name="ellipsis-horizontal" size={32} color="white" />
      </View>
      <View
        style={{
          flex: 0.6,
          // backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 0.1,
            width: "90%",
            height: "80%",
            borderRadius: 20,
            backgroundColor: "#050236",
          }}
        >
          <View
            style={{
              flex: 0.15,
              // backgroundColor: "#9db2d4",
              justifyContent: "center",
            }}
          >
            <Slider />
          </View>
          <View style={{ flex: 0.9 }}>
            <BurgerPressHandler display={display} />
          </View>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <Details price={price} foodname={foodname} />
      </View>
    </View>
  );
};

export default PressHandler;
