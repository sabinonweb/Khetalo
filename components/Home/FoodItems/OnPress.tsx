import { View, Text, Modal, TextInput } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Pizza from "./OnPress/Pizza";
import Burger from "./OnPress/Burger";
import Chicken from "./OnPress/Chicken";
import Coffee from "./OnPress/Coffee";
import Offers from "./OnPress/Offers";
import Boba from "./OnPress/Boba";
import Rice from "./OnPress/Rice";
import Salad from "./OnPress/Salad";

const OnPress = ({ route }) => {
  const { foodName } = route.params;
  const onPressData = [
    {
      name: "Pizza",
      Component: Pizza,
    },
    {
      name: "Burger",
      Component: Burger,
    },
    {
      name: "Chicken",
      Component: Chicken,
    },
    {
      name: "Coffee",
      Component: Coffee,
    },
    {
      name: "Offers",
      Component: Offers,
    },
    {
      name: "Boba",
      Component: Boba,
    },
    {
      name: "Rice",
      Component: Rice,
    },
    {
      name: "Salad",
      Component: Salad,
    },
  ];

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("HomeMain");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
          <Ionicons name="chevron-back" size={32} />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.1,
            width: "80%",
            height: "60%",
            backgroundColor: "lightgray",
            borderRadius: 10,
            flex: 0.85,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Search food"
            style={{ right: 100, fontWeight: "600" }}
          />
          <TouchableOpacity>
            <Ionicons
              name="search"
              size={28}
              style={{ opacity: 0.3, left: 100, top: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 8 }}>
        {onPressData.map((list, index) =>
          foodName === list.name ? <list.Component /> : null
        )}
      </View>
    </View>
  );
};

export default OnPress;
