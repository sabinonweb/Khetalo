import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "aquablue" }}>
      <View
        style={{
          flex: 0.1,
          // backgroundColor: "orange",
          justifyContent: "center",
        }}
      >
        <Ionicons name="menu" size={40} style={{ marginLeft: 10 }} />
      </View>
      <View
        style={{
          flex: 0.25,
          // backgroundColor: "red",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/sheldon.jpg")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            marginTop: 20,
          }}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#050236",
            width: 40,
            height: 50,
            bottom: 30,
            marginLeft: 80,
          }}
        >
          <AntDesign
            name="edit"
            size={24}
            style={{ alignSelf: "center", marginRight: 3 }}
            color="lightgray"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            bottom: 15,
            marginLeft: 10,
          }}
        >
          Sabin
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            alignSelf: "center",
            bottom: 15,
            left: 13,
          }}
        >
          sabinrn@react.com
        </Text>
      </View>
      <View
        style={{
          flex: 0.1,
          // backgroundColor: "#bbeef0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: "45%",
            alignItems: "center",
            paddingVertical: 15,
            borderRadius: 30,
            backgroundColor: "#050236",
          }}
          activeOpacity={0.8}
        >
          <Text style={{ fontWeight: "bold", color: "#b5b5ba" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.45, backgroundColor: "steelblue" }}></View>
      <View style={{ flex: 0.1, backgroundColor: "pink" }}></View>
    </View>
  );
};

export default Profile;
