import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Profile from "./Profile";
import Chat from "./Chat";
import Orders from "./Orders";
import Search from "./Search";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

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
      name: "Search",
      icon: "search1",
      component: Search,
    },
    {
      name: "Profile",
      icon: "user",
      component: Profile,
    },
    {
      name: "Orders",
      icon: "switcher",
      component: Orders,
    },
  ];

  const TabBar = ({ list, accessibilityState, tabBarLabel }) => {
    const isFocused = accessibilityState.selected;
    const sharedValue = useSharedValue(0);
    const Navigation = useNavigation();

    const handlePress = () => {
      sharedValue.value = withSpring(50);
      Navigation.navigate(list.name);
    };

    const animatedCircle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: isFocused ? withSpring(-sharedValue.value + 25) : 0,
          },
          { scaleY: isFocused ? 1.2 : 1 },
        ],
      };
    });

    return (
      <SafeAreaView style={{ flex: 1 }}>
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
                  borderWidth: 0,
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
                style={{ alignSelf: "center" }}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarLabel: "",
            tabBarStyle: {
              backgroundColor: "#050236",
              borderRadius: 30,
              height: 70,
              width: "85%",
              alignSelf: "center",
              bottom: 30,
            },
            headerShown: false,
          }}
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
    </SafeAreaView>
  );
};

export default Layout;
