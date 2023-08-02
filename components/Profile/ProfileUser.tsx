import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileUser = () => {
  const profileUserData = [
    {
      name: "Settings",
      icon: "settings-outline",
      id: 1,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Billing Details",
      icon: "cash-outline",
      id: 2,
      arrow: "chevron-forward-outline",
    },
    {
      name: "User Management",
      icon: "person-outline",
      id: 3,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Total Expenditure",
      icon: "card-outline",
      id: 4,
      arrow: "chevron-forward-outline",
    },
  ];
  return (
    <View>
      {profileUserData.map((list, index) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
          key={index}
        >
          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 50,
              backgroundColor: "#cdd4d0",
              padding: 7,
              marginLeft: 40,
            }}
          >
            <Ionicons name={list.icon} size={32} color="#050236" />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginLeft: 30,
                color: "gray",
              }}
            >
              {list.name}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Ionicons name={list.arrow} size={24} color="gray" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProfileUser;
