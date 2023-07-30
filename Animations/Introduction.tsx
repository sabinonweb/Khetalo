import {
    View,
    Text,
    SafeAreaView,
    Button,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect } from "react";
  import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withSpring,
    withRepeat
  } from "react-native-reanimated";
  
  const Home = () => {
    const sharedValue = useSharedValue(0);
    const scaleValue = useSharedValue(2)
    const handlePress = () => {
      sharedValue.value = withSpring(0, {duration:500});
    };
    useEffect(() => {
      scaleValue.value = withRepeat(withTiming(0,{duration:100}), 3);
      sharedValue.value = withRepeat(withSpring(50, {duration:100}), 3, true);
  }, [])
    const animatedView = useAnimatedStyle(() => {
      return {
        borderRadius:sharedValue.value,
        transform: [
          {
            scale: scaleValue.value,
          },
        ],
      };
    });
  
  
    return (
      <SafeAreaView>
        <Animated.View
          style={[
            {
              borderWidth: 0.1,
              width: 100,
              height: 100,
              alignSelf: "center",
              backgroundColor: "steelblue",
            },
            animatedView,
          ]}
        >
          <TouchableOpacity onPress={handlePress} style={{borderWidth:1, backgroundColor:'green', alignSelf:'center', marginTop:120, width:80,height:40, borderRadius:50}}>
            <Text style={{alignSelf:'center'}}>Press</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  };
  
  export default Home;
  