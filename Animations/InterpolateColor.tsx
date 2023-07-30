import { View, Text, SafeAreaView, Switch, Dimensions } from "react-native";
import React, { useState } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const Home = () => {
  type Theme = "light" | "dark";

  const [theme, setTheme] = useState<Theme>("light");

  const sharedValue = useDerivedValue(() => {
    return theme === "dark" ? 1 : 0;
  });

  const derivedValue = useDerivedValue(() => {
    return theme === "dark" ? 0 : 1;
  });

  const animated = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      sharedValue.value,
      [0, 1],
      ["#fff", "#000"]
    );
    return { backgroundColor: backgroundColor };
  });

  const animatedCircle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      derivedValue.value,
      [0, 1],
      ["#fff", "#000"]
    );
    return { backgroundColor: backgroundColor };
  });

  const animatedText = useAnimatedStyle(() => {
    const color = interpolateColor(sharedValue.value, [0, 1], ["#fff", "#000"]);
    return { color: color };
  });
  
  const SIZE = Dimensions.get("window").width * 0.7;
  return (
    <Animated.View
      style={[
        {
          backgroundColor: "red",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        animatedCircle,
      ]}
    >
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZE / 2,
            alignSelf: "center",
            marginTop: 400,
            shadowOffset: {
              width: 0,
              height: 20,
            },
          },
          animatedCircle,
        ]}
      >
        <Animated.Text style={[{ fontSize: 18,fontWeight:'bold', color: "white" }, animatedText]}>
          Welcome to the USO Penintentiary
        </Animated.Text>
        <Switch
          trackColor={{ false: "#f0bbbb", true: "#7dd3fc" }}
          thumbColor={theme === "dark" ? "#002244" : "#820303"}
          ios_backgroundColor="#f0bbbb"
          onValueChange={(toggled) => {
            setTheme(toggled ? "dark" : "light");
          }}
          value={theme === "dark"}
          style={{ alignSelf: "center", top:450 }}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Home;
