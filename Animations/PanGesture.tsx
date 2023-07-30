import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from "react-native-reanimated";

const Home = () => {
  type Context = {
    panValueX: number
    panValueY: number
  }

  const panValueX = useSharedValue(0);
  const panValueY = useSharedValue(3);

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
      onStart: (event, context) => {
        context.panValueX = panValueX.value
        context.panValueY = panValueY.value
      },
      onActive: (event, context) => {
        panValueX.value = event.translationX + context.panValueX;
        panValueY.value = event.translationY + context.panValueY;
      },
      onEnd: (event, context) => {
        panValueX.value = withTiming(0, {duration : 500});
        panValueY.value=withTiming(0, {duration : 500});
      }
    });


  const animatedView = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: panValueX.value,
        },
        {
          translateY: panValueY.value
        }
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <View>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View
            style={[
              {
                borderWidth: 0.1,
                width: 100,
                height: 100,
                backgroundColor: "steelblue",
                alignSelf: "center",
                marginTop: 100,
                borderRadius: 20,
              },
              animatedView,
            ]}
          ></Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;
