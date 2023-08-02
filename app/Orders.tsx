import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@rneui/themed-edge";
import TopTab from "../components/Search/TopTab";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "aquablue" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.1,
            // backgroundColor: "red",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Icon name="menu" size={36} style={{ marginLeft: 15 }} />
        </View>
        <View
          style={{
            flex: 0.15,
            // backgroundColor: "orange",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 32, marginLeft: 15, fontWeight: "600" }}>
            What would you like to {""}
          </Text>
          <Text style={{ fontSize: 32, marginLeft: 15, fontWeight: "600" }}>
            feast on Sapien?
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // backgroundColor: "skyblue",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 0.1,
              height: 50,
              width: "75%",
              backgroundColor: "lightgray",
              borderRadius: 40,
              marginRight: 70,
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: 40,
              flexDirection: "row",
            }}
            activeOpacity={0.9}
          >
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.5,
                marginLeft: 20,
              }}
            >
              <Icon name="search" size={26} activeOpacity={1} />
            </View>
            <TextInput placeholder="search for food"></TextInput>
          </TouchableOpacity>
          <View>
            <Ionicons
              name="options-outline"
              size={32}
              style={{ alignSelf: "flex-end", right: 30 }}
            />
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <TopTab />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
