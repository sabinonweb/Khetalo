import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { ContextType } from "react";
import { Icon } from "@rneui/themed";
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
} from "react-native-reanimated";

const Featured = () => {
  const FeaturedData = [
    {
      name: "McDonald - Kartasura",
      rating: "4.8",
      distance: "1.2km",
      time: "15-20 minutes",
      image: require("../../assets/karta.avif"),
    },
    {
      name: "Fore Coffee - Paragons",
      rating: "4.8",
      distance: "1.2km",
      time: "15-20 minutes",
      image: require("../../assets/fore.jpg"),
    },
    {
      name: "Starbuck - Paradise",
      rating: "4.8",
      distance: "1.2km",
      time: "15-20 minutes",
      image: require("../../assets/starbucks.jpg"),
    },
    {
      name: "KFC - Sizzle",
      rating: "4.8",
      distance: "1.2km",
      time: "15-20 minutes",
      image: require("../../assets/kfc.jpg"),
    },
    {
      name: "Dominos - Cheeze",
      rating: "4.8",
      distance: "1.2km",
      time: "15-20 minutes",
      image: require("../../assets/dominos.webp"),
    },
  ];

  type ContextType = {
    x: number;
  };

  const N = FeaturedData.length;
  const width = Dimensions.get("window").width;
  const widthTranslatex = -width * N;
  console.log(width);
  const translateValue = useSharedValue(0);
  const translationValue = useDerivedValue(() => {
    return Math.min(0, translateValue.value);
  });

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = translationValue.value;
      console.log("context.x: ", context.x);
    },
    onActive: (event, context) => {
      console.log(translateValue.value);
      translateValue.value = event.translationX + context.x;
      console.log("event.translationX: ", event.translationX);
      console.log("translateValue.value: ", translationValue.value);
    },
    onEnd: (event) => {
      translateValue.value = withDecay({
        velocity: event.velocityX,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateValue.value }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center",
          left: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", right: 150 }}>
          Featured
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#0f7804",
              left: 110,
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
              style={[{ flex: 0.9, flexDirection: "row" }, animatedStyle]}
            >
              {FeaturedData.map((list, index) => (
                <View
                  key={index}
                  style={{
                    borderWidth: 0.1,
                    borderRadius: 30,
                    paddingVertical: 3,
                    alignItems: "center",
                    marginTop: 10,
                    justifyContent: "flex-start",
                    marginHorizontal: 10,
                    backgroundColor: "#dbd8d5",
                  }}
                >
                  <Image
                    source={list.image}
                    style={{
                      height: 120,
                      width: 180,
                      borderRadius: 30,
                      marginTop: 5,
                      marginHorizontal: 5,
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 0.1,
                      width: 50,
                      height: 30,
                      borderRadius: 30,
                      alignSelf: "center",
                      bottom: 115,
                      left: 55,
                      backgroundColor: "#dbd8d5",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      name="star"
                      size={20}
                      style={{ alignSelf: "center" }}
                    />
                    <Text style={{ alignSelf: "center", fontWeight: 600 }}>
                      {list.rating}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      alignSelf: "flex-start",
                      left: 10,
                    }}
                  >
                    {list.name}
                  </Text>
                  <Text style={{ alignSelf: "center", right: 65, top: 3 }}>
                    {list.distance}
                  </Text>
                  <Text style={{ alignSelf: "center", left: 40, bottom: 15 }}>
                    {list.time}
                  </Text>
                </View>
              ))}
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

export default Featured;
