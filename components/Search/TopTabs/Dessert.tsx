import { View, FlatList, ScrollView, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const All = () => {
  const DataLeft = [
    {
      name: "problemas en el paraiso",
      backgroundColor: "#dbaf8a",
      paddingHorizontal: 50,
      paddingVertical: 50,
      image: require("../../../assets/Food/14.png"),
      key: 6,
      price: "$40",
    },
    {
      name: "Muchas graciss",
      backgroundColor: "#f5e5cb",
      paddingHorizontal: 20,
      paddingVertical: 20,
      image: require("../../../assets/Food/12.png"),
      key: 5,
      price: "$40",
    },
    {
      name: "¡Cuánto tiempo sin verte! ",
      backgroundColor: "#f5e5cb",
      paddingHorizontal: 70,
      paddingVertical: 90,
      image: require("../../../assets/Food/14.png"),
      key: 4,
      price: "$40",
    },
    {
      name: "¡Qué bien te ves!",
      backgroundColor: "skyblue",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/13.png"),
      key: 3,
      price: "$40",
    },
    {
      name: "Buenos días",
      backgroundColor: "#b9c3f0",
      paddingHorizontal: 50,
      paddingVertical: 90,
      image: require("../../../assets/Food/12.png"),
      key: 2,
      price: "$40",
    },
    {
      name: "problemas en el paraiso",
      backgroundColor: "#dbaf8a",
      paddingHorizontal: 20,
      paddingVertical: 90,
      image: require("../../../assets/Food/11.png"),
      key: 1,
      price: "$40",
    },
  ];

  const DataRight = [
    {
      name: "Parece que fue ayer, ¿no?",
      backgroundColor: "#f0b9d3",
      paddingHorizontal: 10,
      paddingVertical: 10,
      image: require("../../../assets/Food/17.png"),
      key: 7,
      price: "$40",
    },
    {
      name: "Qué calor / frío hace hoy! ",
      backgroundColor: "#cbecf5",
      paddingHorizontal: 10,
      paddingVertical: 120,
      image: require("../../../assets/Food/16.png"),
      key: 8,
      price: "$40",
    },
    {
      name: "Hala Madrid",
      backgroundColor: "#b9d5f0",
      paddingHorizontal: 50,
      paddingVertical: 50,
      image: require("../../../assets/Food/15.png"),
      key: 9,
      price: "$40",
    },
    {
      name: "No me vengas con ",
      backgroundColor: "#f7e1e8",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/18.png"),
      key: 10,
      price: "$40",
    },
    {
      name: "Siuuuuuuuuuu",
      backgroundColor: "#67b5ac",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/15.png"),
      key: 11,
      price: "$40",
    },
    {
      name: "Bienvenido",
      backgroundColor: "#b56767",
      paddingHorizontal: 70,
      paddingVertical: 70,
      image: require("../../../assets/Food/13.png"),
      key: 12,
      price: "$40",
    },
  ];

  const Length = DataLeft.length;
  const Rength = DataRight.length;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5 }}>
          {DataLeft.map((item, index) => {
            if (index <= Length) {
              return (
                <View style={{ flex: 1 }} key={item.key}>
                  <View
                    style={{
                      borderWidth: 0.1,
                      paddingHorizontal: item.paddingHorizontal,
                      paddingVertical: item.paddingVertical,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: item.backgroundColor,
                      marginLeft: 20,
                      marginRight: 20,
                      borderRadius: 30,
                      marginTop: 30,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ height: 100, width: 100 }}
                    />
                  </View>
                  <View
                    style={{
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginLeft: 30,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "flex-start",
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                      numberOfLines={2}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        flexDirection: "row",
                      }}
                    >
                      <Ionicons name="cash-outline" size={24} />
                      <Text
                        style={{
                          paddingLeft: 10,
                          paddingTop: 1,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
        <View style={{ flex: 0.5 }}>
          {DataRight.map((item, index) => {
            if (index <= Rength) {
              return (
                <View style={{ flex: 1 }} key={item.key}>
                  <View
                    style={{
                      borderWidth: 0.1,
                      paddingHorizontal: item.paddingHorizontal,
                      paddingVertical: item.paddingVertical,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: item.backgroundColor,
                      marginLeft: 20,
                      marginRight: 20,
                      borderRadius: 30,
                      marginTop: 30,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ height: 100, width: 100 }}
                    />
                    <Text>{item.price}</Text>
                  </View>
                  <View
                    style={{
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginLeft: 30,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "flex-start",
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                      numberOfLines={2}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        flexDirection: "row",
                      }}
                    >
                      <Ionicons name="cash-outline" size={24} />
                      <Text
                        style={{
                          paddingLeft: 10,
                          paddingTop: 1,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default All;
