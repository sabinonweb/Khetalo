import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeCarousel from "./HomeCarousel";
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
  withSpring,
  withTiming,
} from "react-native-reanimated";
import FoodItems from "./FoodItems";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Featured from "./Featured";

const Stack = createStackNavigator();

const HomeMain = () => {
  const carouselData = [
    {
      image: require("../../assets/food.jpeg"),
      id: 1,
    },
    {
      image: require("../../assets/r.jpg"),
      id: 2,
    },
    {
      image: require("../../assets/soup.jpg"),
      id: 3,
    },
    {
      image: require("../../assets/cake.webp"),
      id: 4,
    },
    {
      image: require("../../assets/b.webp"),
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

  const sliderGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = sliderValue.value;
    },
    onActive: (event, context) => {
      console.log("Slider Gesture Handler called!");
      sliderValue.value = event.translationX + context.x;
      console.log("ET: ", event.translationX);
    },
  });

  const animatedSliders = (index: number) => {
    const quotient = sliderValue.value / windowWidth;
    const isFocused = Math.round(quotient) === index;
    return useAnimatedStyle(() => {
      console.log("Sv:", sliderValue.value);
      return {
        width: isFocused ? withSpring(40) : 10,
        backgroundColor: isFocused
          ? withTiming("green", { duration: 200 })
          : "gray",
      };
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 0.1,
            padding: 10,
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
            flex: 0.4,
            justifyContent: "center",
            paddingVertical: 110,
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
            flex: 0.07,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GestureHandlerRootView>
            <PanGestureHandler onGestureEvent={sliderGestureHandler}>
              <Animated.View
                style={{
                  backgroundColor: "lightgray",
                  flex: 0.07,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {carouselData.map((list: any, index: number) => (
                  <Animated.View
                    key={index}
                    style={[
                      {
                        borderWidth: 1,
                        height: 10,
                        width: "3%",
                        marginHorizontal: 1,
                        backgroundColor: "gray",
                        borderRadius: 50,
                      },
                      animatedSliders(index),
                    ]}
                  />
                ))}
              </Animated.View>
            </PanGestureHandler>
          </GestureHandlerRootView>
        </View>
        <View style={{ flex: 0.35, flexDirection: "row", padding: 0 }}>
          <FoodItems />
        </View>
        <View style={{ flex: 0.35, flexDirection: "row" }}>
          <Featured />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeMain;
