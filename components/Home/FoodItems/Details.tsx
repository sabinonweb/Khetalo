import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const route = useRoute();
  const { name, price } = route.params;
  const detailsData = [
    {
      name: "Total",
      key: 4,
      money: "$258",
      icon: "card-outline",
      paddingHorizontal: 20,
      paddingVertical: 40,
      height: 110,
      backgroundColor: "#c3c6db",
      color: "#bcc2f5",
      width: "55%",
    },

    {
      name: "Delivery Time",
      key: 2,
      text: "12:45",
      icon: "time-outline",
      paddingHorizontal: 20,
      //   paddingVertical: 20,
      height: 100,
      backgroundColor: "#cbcaed",
      width: "35%",
      color: "#6a6a6b",
    },

    {
      name: "Average Rate",
      key: 3,
      text: "12:45",
      icon: "time-outline",
      paddingHorizontal: 20,
      //   paddingVertical: 20,
      height: 100,
      backgroundColor: "#f5eabc",
      width: "35%",
      color: "#bcf4f5",
    },
    {
      item: "Delivery Adress",
      key: 1,
      address: "6391 Elgin St. Celina,\nDelaware 10299",
      paddingHorizontal: 20,
      //   paddingVertical: 10,
      height: 100,
      backgroundColor: "lightgray",
      width: "55%",
      color: "#f5eabc",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.2,
          // backgroundColor: "#edcad8",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 0.9,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: 700 }}>Details</Text>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "gray" }}>
            See more
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          // backgroundColor: "#f3e3fc",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {detailsData.map((list, index) => (
          <View
            key={list.key}
            style={{
              backgroundColor: list.backgroundColor,
              flexDirection: "column",
              height: list.height,
              width: list.width,
              marginLeft: 15,
              marginTop: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                borderWidth: 0.1,
                backgroundColor: index !== 3 ? "black" : null,
                borderRadius: 50,
                marginLeft: 20,
                top: 55,
                padding: 5,
              }}
            >
              <Ionicons
                name={list.icon}
                size={36}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </View>
            <Text
              style={{ fontWeight: 500, color: "gray", bottom: 15, left: 20 }}
            >
              {name}
            </Text>

            <Text
              style={{
                fontWeight: 700,
                fontSize: 28,
                left: 90,
                bottom: 30,
              }}
            >
              {price}
            </Text>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 20,
                marginLeft: 5,
                bottom: 20,
                left: 20,
              }}
            >
              {/* {list.address} */}
            </Text>
          </View>
        // {/* ))} */}
      </View>
    </View>
  );
};

export default Details;
