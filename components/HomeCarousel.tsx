import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withDecay,
} from "react-native-reanimated";

// interface HomeCarouselProps {
//   index?: number;
//   image?: string;
//   id: number;
// }

const HomeCarousel: React.FC<{
  index: number;
  image: ImageSourcePropType;
  id: number;
  sharedXValue: Animated.SharedValue<number>;
}> = ({ index, image, id, sharedXValue }) => {
  const pageWidth = Dimensions.get("window").width;
  const originalTranslate = pageWidth * index;
  const animatedCarousel = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedXValue.value + originalTranslate }],
    };
  });

  return (
    <Animated.View
      key={id}
      style={[
        {
          flexDirection: "row",
          ...StyleSheet.absoluteFillObject,
          position: "absolute",
          alignItems: "stretch",
          top: 20,
        },
        animatedCarousel,
      ]}
    >
      <Image
        source={image}
        style={{
          width: pageWidth,
          height: 300,
          borderRadius: 10,
        }}
      />
    </Animated.View>
  );
};

export default HomeCarousel;
