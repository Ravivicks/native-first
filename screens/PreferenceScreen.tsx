import { View } from "react-native";
import React from "react";
import Animated, { Easing, ZoomIn } from "react-native-reanimated";
import { preferenceList } from "../utilis/items";
import { Button, Chip, Icon } from "react-native-paper";

const PreferenceScreen = () => {
  const [selectedPreferences, setSelectedPreferences] = React.useState<
    string[]
  >([]);

  const selectedPreference = (item: any) => {
    setSelectedPreferences((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((preference) => preference !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

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
        className="text-3xl font-bold text-gray-600 mt-6"
      >
        Investment Preferences
      </Animated.Text>
      <Animated.Text
        entering={ZoomIn.easing(Easing.ease).delay(300)}
        className="mx-10 mb-5 text-center text-gray-600 text-base"
      >
        For a personalised experience
      </Animated.Text>

      <Animated.View
        entering={ZoomIn.easing(Easing.ease).delay(400)}
        className="flex flex-row flex-wrap my-7 px-3 ml-5"
      >
        {preferenceList.map((item) => {
          return (
            <Chip
              mode={selectedPreferences.includes(item) ? "flat" : "outlined"}
              className="m-1 p-2 rounded-full"
              key={item}
              showSelectedOverlay={selectedPreferences.includes(item)}
              elevated={selectedPreferences.includes(item)}
              selected={selectedPreferences.includes(item)}
              onPress={() => selectedPreference(item)}
            >
              {item}
            </Chip>
          );
        })}
      </Animated.View>
      <View className="flex flex-row mx-10 my-10">
        <Animated.View entering={ZoomIn.easing(Easing.ease).delay(500)}>
          <Icon source="information-outline" size={25} color="gray" />
        </Animated.View>
        <Animated.Text
          entering={ZoomIn.easing(Easing.ease).delay(600)}
          className=" text-center text-gray-600 text-base"
        >
          You can modify preferences at any time from the profile
        </Animated.Text>
      </View>
      <Animated.View
        entering={ZoomIn.easing(Easing.ease).delay(700)}
        className="w-[80%]"
      >
        <Button
          //   onPress={() => navigation.navigate("loginWithGoogle")}
          mode="elevated"
          icon="thumb-up-outline"
          textColor="#FFF"
          labelStyle={{
            fontSize: 20,
          }}
          contentStyle={{
            padding: 10,
            flexDirection: "row-reverse",
          }}
          className="bg-teal-900"
        >
          Done
        </Button>
        <Button className="mt-3">I'll Do this later</Button>
      </Animated.View>
    </View>
  );
};

export default PreferenceScreen;
