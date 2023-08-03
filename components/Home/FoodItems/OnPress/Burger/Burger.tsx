import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Burger = () => {
  const BurgerDataLeft = [
    {
      name: "problemas",
      backgroundColor: "#4f1e27",
      paddingHorizontal: 40,
      paddingVertical: 20,
      image: require("../../../../../assets/navigate/a.png"),
      key: 1,
      price: "$40",
      marginTop: 30,
      display: [
        require("../../../../../assets/Burger/b.jpg"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "1234 Oak Street, Springfield,\nIllinois 62701",
    },
    {
      name: "Buenos",
      backgroundColor: "#d1f0eb",
      paddingHorizontal: 70,
      paddingVertical: 40,
      image: require("../../../../../assets/navigate/a.png"),
      price: "$40",
      marginTop: 40,
      key: 2,
      display: [
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b5.webp"),
        require("../../../../../assets/Burger/b7.webp"),
        require("../../../../../assets/Burger/b6.jpg"),
      ],
      address: "5678 Maple Avenue, Pleasantville,\nNew York 10570",
    },
    {
      name: "¡Qué",
      backgroundColor: "skyblue",
      paddingHorizontal: 30,
      paddingVertical: 25,
      image: require("../../../../../assets/navigate/a.png"),
      key: 3,
      price: "$40",
      marginTop: 20,
      display: [
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b7.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "9101 Pine Drive, Riverside,\nCalifornia 92501",
    },
    {
      name: "¡Cuánto",
      backgroundColor: "#f5e5cb",
      paddingHorizontal: 50,
      paddingVertical: 50,
      image: require("../../../../../assets/navigate/a.png"),
      key: 4,
      price: "$40",
      marginTop: 50,
      display: [
        require("../../../../../assets/Burger/b3.jpg"),
        require("../../../../../assets/Burger/b12.jpg"),
        require("../../../../../assets/Burger/b10.webp"),
        require("../../../../../assets/Burger/b11.jpg"),
      ],
      address: "2468 Elm Road, Phoenix,\nArizona 85001",
    },
    {
      name: "Muchas",
      backgroundColor: "#d6b072",
      paddingHorizontal: 100,
      paddingVertical: 100,
      image: require("../../../../../assets/navigate/a.png"),
      key: 5,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b4.jpg"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "9753 Cedar Street, Seattle,\nWashington 98101",
    },
    {
      name: "problemas",
      backgroundColor: "#8a8469",
      paddingHorizontal: 80,
      paddingVertical: 80,
      image: require("../../../../../assets/navigate/a.png"),
      key: 6,
      marginTop: 10,
      price: "$40",
      display: [
        require("../../../../../assets/Burger/b5.webp"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "1357 Birch Lane, Denver,\nColorado 80201",
    },
  ];
  const BurgerDataRight = [
    {
      name: "Muchas",
      backgroundColor: "#21204d",
      paddingHorizontal: 80,
      paddingVertical: 100,
      image: require("../../../../../assets/navigate/a.png"),
      key: 7,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b6.jpg"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "8642 Willow Court, Austin,\nTexas 78701",
    },
    {
      name: "problemas",
      backgroundColor: "#d67284",
      paddingHorizontal: 20,
      paddingVertical: 70,
      image: require("../../../../../assets/navigate/a.png"),
      key: 8,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b7.webp"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "3645 Sycamore Drive, Boston,\nMassachusetts 02101",
    },
    {
      name: "¡Cuánto",
      backgroundColor: "#778c65",
      paddingHorizontal: 50,
      paddingVertical: 60,
      image: require("../../../../../assets/navigate/a.png"),
      key: 9,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b8.jpg"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "7890 Oakwood Avenue, Orlando,\nFlorida 32801",
    },
    {
      name: "¡Qué",
      backgroundColor: "#65678c",
      paddingHorizontal: 100,
      paddingVertical: 200,
      image: require("../../../../../assets/navigate/a.png"),
      key: 10,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b9.webp"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "4321 Maplewood Lane, Atlanta,\nGeorgia 30301",
    },

    {
      name: "problemas",
      backgroundColor: "#f0d1e3",
      paddingHorizontal: 20,
      paddingVertical: 70,
      image: require("../../../../../assets/navigate/a.png"),
      key: 11,
      price: "$40",
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b10.webp"),
        require("../../../../../assets/Burger/b1.jpg"),
        require("../../../../../assets/Burger/b2.webp"),
        require("../../../../../assets/Burger/b3.jpg"),
      ],
      address: "2019 Birchwood Road, Chicago,\nIllinois 60601",
    },

    {
      name: "Buenos",
      backgroundColor: "#d1f0eb",
      paddingHorizontal: 60,
      paddingVertical: 90,
      image: require("../../../../../assets/navigate/a.png"),
      price: "$40",
      key: 12,
      marginTop: 80,
      display: [
        require("../../../../../assets/Burger/b11.jpg"),
        require("../../../../../assets/Burger/b12.jpg"),
        require("../../../../../assets/Burger/b7.webp"),
        require("../../../../../assets/Burger/b8.jpg"),
      ],
      address: "7531 Cedar Avenue, Las Vegas,\nNevada 89101",
    },
  ];

  const Navigation = useNavigation();

  const pressHandler = (name, price, display, address) => {
    Navigation.navigate("PressHandler", {
      foodname: name,
      price: price,
      display: display,
      address: address,
    });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          {BurgerDataLeft.map((list, index) => (
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
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  pressHandler(
                    list.name,
                    list.price,
                    list.display,
                    list.address
                  )
                }
              >
                <Image
                  source={list.image}
                  style={{ width: 180, height: 140, alignSelf: "center" }}
                />
              </TouchableOpacity>
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
          {BurgerDataRight.map((list, index) => (
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
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  pressHandler(
                    list.name,
                    list.price,
                    list.display,
                    list.address
                  )
                }
              >
                <Image
                  source={list.image}
                  style={{ width: 180, height: 140, alignSelf: "center" }}
                />
              </TouchableOpacity>
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

export default Burger;
