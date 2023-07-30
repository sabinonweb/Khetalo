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
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = alteredSharedXValue.value;
      console.log(context.x);
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

  const sliderValue = useSharedValue(0);
  const sliderStyle = (index: number) => {
    return useAnimatedStyle(() => {
      return {
        backgroundColor:
          sliderValue.value / windowWidth === index ? "#050236" : "gray",
        width:
          sliderValue.value / windowWidth === index
            ? withTiming(40, { duration: 300 })
            : withTiming(15, { duration: 300 }),
      };
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "aquablue" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
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

      <View>
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={{ flexDirection: "row" }}>
              {carouselData.map((item, index) => (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <HomeCarousel
                    key={item.id}
                    image={item.image}
                    id={item.id}
                    index={index}
                    sharedXValue={alteredSharedXValue}
                  />
                </View>
              ))}
            </Animated.View>
          </PanGestureHandler>
          {carouselData.map((item, index) => (
            <Animated.View
              key={index}
              style={[sliderStyle(index), { width: 40, backgroundColor: }]}
            />
          ))}
        </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
