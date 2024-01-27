import { View, Text, Image } from "react-native";
import React from "react";
import Animated, {
  Easing,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
} from "react-native-reanimated";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(100)}
        className="text-3xl font-bold text-teal-950"
      >
        Company Logo
      </Animated.Text>
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(200)}
        className="text-2xl font-bold text-gray-600"
      >
        Login
      </Animated.Text>
      <Animated.Image
        entering={ZoomIn.easing(Easing.ease).delay(300)}
        source={require("../assets/login4.webp")}
        resizeMode={"contain"}
        className="w-[100%]"
      />
      <Animated.View entering={ZoomIn.easing(Easing.ease).delay(400)}>
        <Button
          onPress={() => navigation.navigate("preferences")}
          mode="elevated"
          icon="google"
          buttonColor="#fff"
          contentStyle={{
            borderRadius: 1,
            padding: 10,
            width: "100%",
          }}
        >
          Continue with Google
        </Button>
        <Divider className="my-6 mx-2" bold />
        <Animated.View entering={ZoomIn.easing(Easing.ease).delay(500)}>
          <Button
            onPress={() => navigation.navigate("login")}
            mode="elevated"
            icon="email"
            textColor="#FFF"
            labelStyle={{
              fontSize: 20,
            }}
            contentStyle={{
              padding: 10,
            }}
            className="bg-teal-900"
          >
            Login with Email
          </Button>
        </Animated.View>
      </Animated.View>
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(600)}
        className="mx-10 py-6 text-center text-gray-600 text-sm"
      >
        By logging you agree to the{" "}
        <Text className="text-blue-600 text-sm">Term and Conditions </Text>
        set by company name
      </Animated.Text>
    </View>
  );
};

export default LoginScreen;
