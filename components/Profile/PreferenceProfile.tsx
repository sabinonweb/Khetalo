import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const PreferenceProfile = () => {
  const preferenceProfileData = [
    {
      name: "Favourites",
      icon: "heart-outline",
      id: 5,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Location",
      icon: "location-outline",
      id: 6,
      arrow: "chevron-forward-outline",
    },
  ];
  const logOut = [
    {
      name: "LogOut",
      icon: "log-out-outline",
      id: 7,
      arrow: "chevron-forward-outline",
    },
  ];

  return (
    <View
      style={{
        borderTopWidth: 2,
        borderTopColor: "gray",
      }}
    >
      {preferenceProfileData.map((list, index) => (
        <View
          style={{
            flexDirection: "row",
            // borderWidth: 2,
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
                marginRight: 100,
                color: "gray",
                marginLeft: 30,
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
      {logOut.map((list, index) => (
        <View
          style={{
            flexDirection: "row",
            // borderWidth: 2,
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
                marginRight: 100,
                color: "red",
                marginLeft: 30,
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

export default PreferenceProfile;
