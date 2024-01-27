import { View, Text, Pressable } from "react-native";
import React from "react";
import Animated, {
  Easing,
  FadeIn,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import BlurCarousal from "../components/Carousal/pause-advanced-parallax";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";

const GetStarted = () => {
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(100)}
        className="text-3xl font-bold text-teal-950"
      >
        Company Logo
      </Animated.Text>
      <Animated.View entering={ZoomIn.easing(Easing.ease).delay(200)}>
        <BlurCarousal />
      </Animated.View>
      <Animated.View
        entering={ZoomIn.easing(Easing.ease).delay(300)}
        className="w-[80%]"
      >
        <Button
          onPress={() => navigation.navigate("loginWithGoogle")}
          mode="elevated"
          icon="send"
          textColor="#FFF"
          labelStyle={{
            fontSize: 20,
          }}
          contentStyle={{
            padding: 10,
            flexDirection: "row-reverse",
          }}
          className="bg-teal-900 mt-9"
        >
          Get Started
        </Button>
      </Animated.View>
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(400)}
        className="mx-10 py-6 text-center text-gray-600 text-sm"
      >
        By clicking Get Started you agree to the{" "}
        <Text className="text-blue-600 text-sm">Term and Conditions </Text>
        set by company name
      </Animated.Text>
    </View>
  );
};

export default GetStarted;
