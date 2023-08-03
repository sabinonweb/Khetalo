import { View, Text, Modal, TextInput } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Pizza from "./OnPress/Pizza/Pizza";
import Burger from "./OnPress/Burger/Burger";
import Chicken from "./OnPress/Chicken/Chicken";
import Coffee from "./OnPress/Coffee/Coffee";
import Offers from "./OnPress/Offers/Offers";
import Boba from "./OnPress/Boba/Boba";
import Rice from "./OnPress/Rice/Rice";
import Salad from "./OnPress/Salad/Salad";

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
          justifyContent: "flx-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
          <Ionicons name="chevron-back" size={32} />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.1,
            width: "95%",
            height: "60%",
            backgroundColor: "lightgray",
            borderRadius: 10,
            flex: 0.85,
            justifyContent: "center",
            flexDirection: "row",
            left: 20,
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
