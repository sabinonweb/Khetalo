import { View, FlatList, Text, Image } from "react-native";
import React from "react";

const All = () => {
  const Data = [
    {
      name: "problemas en el paraiso",
      backgroundColor: "#dbaf8a",
      paddingHorizontal: 20,
      paddingVertical: 90,
      image: require("../../../assets/Food/11.png"),
      key: 1,
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
      name: "¡Qué bien te ves!",
      backgroundColor: "skyblue",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/13.png"),
      key: 3,
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
      name: "Parece que fue ayer, ¿no?",
      backgroundColor: "#f0b9d3",
      paddingHorizontal: 10,
      paddingVertical: 90,
      image: require("../../../assets/Food/17.png"),
      key: 5,
      price: "$40",
    },
    {
      name: "Qué calor / frío hace hoy! ",
      backgroundColor: "#cbecf5",
      paddingHorizontal: 10,
      paddingVertical: 90,
      image: require("../../../assets/Food/16.png"),
      key: 6,
      price: "$40",
    },
    {
      name: "Hala Madrid",
      backgroundColor: "#b9d5f0",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/15.png"),
      key: 7,
      price: "$40",
    },
    {
      name: "No me vengas con ",
      backgroundColor: "#b9f0c0",
      paddingHorizontal: 90,
      paddingVertical: 90,
      image: require("../../../assets/Food/18.png"),
      key: 8,
      price: "$40",
    },
  ];

  const renderItem = ({ item, index }) => (
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
        <Image source={item.image} style={{ height: 100, width: 100 }} />
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
          style={{ alignSelf: "flex-start", fontSize: 18, fontWeight: 700 }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={Data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.key.toString()}
    ></FlatList>
  );
};

export default All;
