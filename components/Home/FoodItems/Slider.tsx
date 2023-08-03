import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useDerivedValue,
} from "react-native-reanimated";

const Slider = () => {
  type ContextProps = {
    x: number;
  };

  const screenWidth = Dimensions.get("window").width;
  const sliderWidth = 0.8 * screenWidth;
  const minSlider = 0;

  const sharedValue = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextProps
  >({
    onStart: (_, context) => {
      context.x = sharedValue.value;
      console.log("context.x: ", context.x);
    },
    onActive: (event, context) => {
      let derivedSharedValue = context.x + event.translationX;
      derivedSharedValue = Math.max(
        minSlider,
        Math.min(derivedSharedValue, screenWidth)
      );
      sharedValue.value = derivedSharedValue;
    },
    onEnd: () => {
      sharedValue.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedValue.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View
        style={[
          {
            borderWidth: 0,
            width: "40%",
            height: "100%",
            borderRadius: 100,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          },
          animatedStyle,
        ]}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 12,
            left: 12,
          }}
        >
          ADD SPICES
        </Text>
        <Ionicons
          name="chevron-forward"
          color="gray"
          size={18}
          style={{ right: -10 }}
        />
        <Ionicons
          name="chevron-forward"
          color="lightgray"
          size={18}
          style={{ right: 0 }}
        />
        <Ionicons
          name="chevron-forward"
          color="white"
          size={18}
          style={{ right: 10 }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;
