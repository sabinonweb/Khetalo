import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeCarousel from "../components/HomeCarousel";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withTiming,
} from "react-native-reanimated";

const Home = () => {
  const carouselData = [
    {
      image: require("../assets/i.jpeg"),
      id: 1,
    },
    {
      image: require("../assets/r.jpg"),
      id: 2,
    },
    {
      image: require("../assets/soup.jpg"),
      id: 3,
    },
    {
      image: require("../assets/cake.webp"),
      id: 4,
    },
    {
      image: require("../assets/b.webp"),
      id: 5,
    },
  ];

  type ContextType = {
    x: number;
  };

  const windowWidth = Dimensions.get("window").width;
  const maxTranslateX = -windowWidth * (carouselData.length - 1);
  const sharedXValue = useSharedValue(0);
  const alteredSharedXValue = useDerivedValue(() => {
    return Math.max(Math.min(0, sharedXValue.value), maxTranslateX);
  });
  console.log("WW:", windowWidth);
  console.log("sv:", sharedXValue.value);
  console.log("div: ", sharedXValue.value / windowWidth);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = alteredSharedXValue.value;
    },
    onActive: (event, context) => {
      sharedXValue.value = event.translationX + context.x;
    },
    onEnd: (event) => {
      sharedXValue.value = withDecay({
        velocity: event.velocityX,
      });
    },
  });

  return (
    <SafeAreaView style={{ backgroundColor: "aquablue", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 0.1,
          backgroundColor: "steelblue",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,
            borderRadius: 10,
            left: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="search1" size={28} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, opacity: 0.5 }}>Current Location</Text>
          <AntDesign
            name="enviromento"
            size={24}
            color="green"
            style={{ top: 10, right: 70 }}
          />
          <Text
            style={{ fontSize: 18, left: 15, bottom: 15, fontWeight: "600" }}
          >
            Pokhara, Nepal
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,
            borderRadius: 10,
            right: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="bells" size={28} color="black" />
        </View>
      </View>

      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "skyblue",
        }}
      >
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={{ flex: 1 }}>
              {carouselData.map((item, index) => (
                <HomeCarousel
                  key={item.id}
                  image={item.image}
                  id={item.id}
                  index={index}
                  sharedXValue={alteredSharedXValue}
                />
              ))}
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </View>
      <View
        style={{
          backgroundColor: "lightgray",
          flex: 0.07,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {carouselData.map((list: any, index: number) => (
          <View
            style={{
              borderWidth: 1,
              height: 10,
              width: "3%",
              marginHorizontal: 1,
              backgroundColor: "gray",
              borderRadius: 50,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
