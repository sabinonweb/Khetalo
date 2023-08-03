import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const BurgerPressHandler = () => {
  const windowWidth = Dimensions.get("window").width;
  const width = windowWidth * 0.9;

  const burgerData = [
    {
      image: require("../../../../../assets/Burger/burger.jpg"),
      key: 0,
    },
    {
      image: require("../../../../../assets/Burger/burger1.jpg"),
      key: 1,
    },
    {
      image: require("../../../../../assets//Burger/b1.jpg"),
      key: 2,
    },
    {
      image: require("../../../../../assets/Burger/burger4.jpg"),
      key: 3,
    },
  ];

  const snapToOffset = useRef(burgerData.map((_, index) => width * index));
  console.log(snapToOffset);

  useEffect(() => {
    snapToOffset.current = burgerData.map(
      (_, index) => width * index,
      [windowWidth]
    );
  });

  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
    };
  });

  return (
    <View>
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={snapToOffset.current}
        fadingEdgeLength={1}
        decelerationRate="fast"
      >
        <Animated.View style={{ flexDirection: "row" }}>
          {burgerData.map((list, index) => (
            <Image
              source={list.image}
              style={{ width: width, height: windowWidth * 0.7 }}
              resizeMode="cover"
            />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

export default BurgerPressHandler;
