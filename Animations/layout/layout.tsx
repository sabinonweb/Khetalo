import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Profile from "./Profile";
import Chat from "./Chat";
import Orders from "./Orders";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Tabs = createBottomTabNavigator();

const Layout = () => {
  const carouselData = [
    {
      name: "Home",
      icon: "home",
      component: Home,
    },
    {
      name: "Chat",
      icon: "message1",
      component: Chat,
    },
    {
      name: "Orders",
      icon: "switcher",
      component: Orders,
    },
    {
      name: "Profile",
      icon: "user",
      component: Profile,
    },
  ];

  const TabBar = ({ list, accessibilityState, onPress }) => {
    const isFocused = accessibilityState.selected;
    const sharedValue = useSharedValue(0);

    const handlePress = () => {
      sharedValue.value = withTiming(50, { duration: 200 });
      console.log("pressed1");
    };

    const animatedCircle = useAnimatedStyle(() => {
      return {
        transform: [
          { translateY: isFocused ? -sharedValue.value : 0 },
          { scaleY: isFocused ? 1.2 : 0 },
        ],
      };
    });

    return (
      <Animated.View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          animatedCircle,
        ]}
      >
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={1}
          style={{ flex: 1 }}
        >
          <View
            style={[
              {
                borderWidth: 2,
                backgroundColor: isFocused ? "white" : "#050236",
                borderRadius: 50,
                height: 60,
                width: 60,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <AntDesign
              name={list.icon}
              size={32}
              color={isFocused ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={() => ({
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#050236",
            borderRadius: 20,
            height: 100,
            width: "85%",
            alignSelf: "center",
          },
        })}
      >
        {carouselData.map((list: any, index: number) => (
          <Tabs.Screen
            key={index}
            name={list.name}
            component={list.component}
            options={{
              tabBarLabel: "",
              tabBarButton: (props) => <TabBar list={list} {...props} />,
            }}
          />
        ))}
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
