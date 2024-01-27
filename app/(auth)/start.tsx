import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { PreferencesContext } from "../../context/PreferencesContext";
import Animated, {
  Easing,
  SlideInDown,
  SlideInUp,
  SlideOutUp,
  withTiming,
} from "react-native-reanimated";
import {
  ZoomIn,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import GetStarted from "../../screens/GetStarted";

const Start = () => {
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const [show, setShow] = React.useState(true);
  const animation = useSharedValue(0);
  const navigation: any = useNavigation();
  const goToLogin = () => {
    navigation.navigate("login");
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animation.value, {
        duration: 1000,
      }),
    };
  });

  const translateY = useSharedValue(0);

  const onLoad = () => (animation.value = 1);

  React.useEffect(() => {
    onLoad();
    translateY.value -= 350;
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="flex-1 ">
      {/* <Switch color={"white"} value={isThemeDark} onValueChange={toggleTheme} /> */}

      {show ? (
        <Animated.View className="flex-1 w-full h-full justify-center items-center">
          <Animated.Image
            // style={[animatedStyle]}
            entering={ZoomIn.easing(Easing.ease).springify().delay(300)}
            exiting={SlideOutUp.easing(Easing.ease)}
            source={require("../../assets/logo_soon.webp")}
            className="h-[200] w-[200]"
          />
          <Animated.Text
            className="text-3xl font-bold text-teal-950 mt-5"
            entering={SlideInDown.easing(Easing.ease).delay(1000)}
          >
            Company Logo
          </Animated.Text>
        </Animated.View>
      ) : (
        <GetStarted />
      )}
    </SafeAreaView>
  );
};

export default Start;
