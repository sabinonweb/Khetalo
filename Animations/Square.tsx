import React from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";

const N = 11;
const P = 2 * Math.PI;

interface SquareProps {
  index: number;
  sharedValue: Animated.SharedValue<number>;
}

const Square: React.FC<SquareProps> = ({ index, sharedValue }) => {
  const offsetAngle = (2 * Math.PI) / (N + 1);
  const finalAngle = offsetAngle * (12 - index - 1);

  const rotate = useDerivedValue(() => {
    if (sharedValue.value < 2 * Math.PI) {
      return withSpring(Math.min(finalAngle, sharedValue.value));
    } else if (sharedValue.value - P < finalAngle) {
      return withSpring(finalAngle);
    } return withSpring(sharedValue.value)
  });

  const translateY = useDerivedValue(() => {
    if (sharedValue.value < Math.PI) {
      return withSpring(-3 * 12);
    }

    return withSpring(-6 * 12);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <Animated.View
      key={index}
      style={[
        {
          height: 12,
          aspectRatio: 1,
          backgroundColor: "white",
          opacity: (index + 1) / 12,
          position: "absolute",
          transform: [
            { rotate: `${finalAngle * 2}rad` },
            { translateY: -index * 12 },
          ],
        },
        animatedStyle,
      ]}
    />
  );
};

export default Square;
