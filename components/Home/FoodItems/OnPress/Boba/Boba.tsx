import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Boba = () => {
  const bobaDataLeft = [
    {
      name: "problemas",
      backgroundColor: "#4f1e27",
      paddingHorizontal: 40,
      paddingVertical: 20,
      image: require("../../../../assets/navigate/101.png"),
      key: 1,
      price: "$40",
      marginTop: 30,
    },
    {
      name: "Buenos",
      backgroundColor: "#d1f0eb",
      paddingHorizontal: 70,
      paddingVertical: 40,
      image: require("../../../../assets/navigate/101.png"),
      price: "$40",
      marginTop: 40,
    },
    {
      name: "¡Qué",
      backgroundColor: "skyblue",
      paddingHorizontal: 30,
      paddingVertical: 25,
      image: require("../../../../assets/navigate/101.png"),
      key: 3,
      price: "$40",
      marginTop: 20,
    },
    {
      name: "¡Cuánto",
      backgroundColor: "#f5e5cb",
      paddingHorizontal: 50,
      paddingVertical: 50,
      image: require("../../../../assets/navigate/101.png"),
      key: 4,
      price: "$40",
      marginTop: 50,
    },
    {
      name: "Muchas",
      backgroundColor: "#d6b072",
      paddingHorizontal: 100,
      paddingVertical: 10,
      image: require("../../../../assets/navigate/101.png"),
      key: 5,
      price: "$40",
      marginTop: 80,
    },
    {
      name: "problemas",
      backgroundColor: "#8a8469",
      paddingHorizontal: 80,
      paddingVertical: 80,
      image: require("../../../../assets/navigate/101.png"),
      key: 6,
      marginTop: 10,
      price: "$40",
    },
  ];
  const bobaDataRight = [
    {
      name: "Muchas",
      backgroundColor: "#21204d",
      paddingHorizontal: 80,
      paddingVertical: 100,
      image: require("../../../../assets/navigate/101.png"),
      key: 5,
      price: "$40",
      marginTop: 80,
    },
    {
      name: "problemas",
      backgroundColor: "#d67284",
      paddingHorizontal: 20,
      paddingVertical: 70,
      image: require("../../../../assets/navigate/101.png"),
      key: 6,
      price: "$40",
      marginTop: 80,
    },
    {
      name: "¡Cuánto",
      backgroundColor: "#778c65",
      paddingHorizontal: 50,
      paddingVertical: 60,
      image: require("../../../../assets/navigate/101.png"),
      key: 4,
      price: "$40",
      marginTop: 80,
    },
    {
      name: "¡Qué",
      backgroundColor: "#65678c",
      paddingHorizontal: 100,
      paddingVertical: 120,
      image: require("../../../../assets/navigate/101.png"),
      key: 3,
      price: "$40",
      marginTop: 80,
    },

    {
      name: "problemas",
      backgroundColor: "#f0d1e3",
      paddingHorizontal: 20,
      paddingVertical: 70,
      image: require("../../../../assets/navigate/101.png"),
      key: 1,
      price: "$40",
      marginTop: 80,
    },

    {
      name: "Buenos",
      backgroundColor: "#d1f0eb",
      paddingHorizontal: 60,
      paddingVertical: 90,
      image: require("../../../../assets/navigate/101.png"),
      price: "$40",
      key: 2,
      marginTop: 80,
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          {bobaDataLeft.map((list, index) => (
            <View
              style={{
                flex: 1,
                backgroundColor: list.backgroundColor,
                borderWidth: 0.1,
                paddingHorizontal: list.paddingHorizontal,
                paddingVertical: list.paddingVertical,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            >
              <Image
                source={list.image}
                style={{
                  width: 150,
                  height: 90,
                  resizeMode: "center",
                  alignSelf: "center",
                }}
              />

              <View
                style={{
                  backgroundColor: "white",
                  width: 180,
                  height: 40,
                  position: "absolute",
                  bottom: 20,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 600, left: 10, opacity: 0.5 }}>
                  {list.name}
                </Text>
                <Text style={{ fontWeight: "bold", right: 10, fontSize: 18 }}>
                  {list.price}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ flex: 1 }}>
          {bobaDataRight.map((list, index) => (
            <View
              style={{
                flex: 1,
                backgroundColor: list.backgroundColor,
                borderWidth: 0.1,
                paddingHorizontal: list.paddingHorizontal,
                paddingVertical: list.paddingVertical,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            >
              <Image
                source={list.image}
                style={{ width: 150, height: 90, alignSelf: "center" }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  width: 180,
                  height: 40,
                  position: "absolute",
                  bottom: 20,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 600, left: 10, opacity: 0.5 }}>
                  {list.name}
                </Text>
                <Text style={{ fontWeight: "bold", right: 10, fontSize: 18 }}>
                  {list.price}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Boba;
