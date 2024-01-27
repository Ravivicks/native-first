import * as React from "react";
import { View, Image, ImageSourcePropType, Text } from "react-native";
import Animated from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { window } from "../../../constants";
import { ImageItems } from "../../../utilis/items";
import { parallaxLayout } from "../blur-parallelx/parallax";

const PAGE_WIDTH = window.width;

function Index() {
  return (
    <View>
      <Carousel
        loop={true}
        autoPlay={true}
        style={{ width: PAGE_WIDTH, height: 540 }}
        width={PAGE_WIDTH}
        data={[...ImageItems, ...ImageItems]}
        autoPlayInterval={5000}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <CustomItem
              key={index}
              index={index}
              source={item.image}
              title={item.title}
              desc={item.desc}
            />
          );
        }}
        customAnimation={parallaxLayout(
          {
            size: PAGE_WIDTH,
            vertical: false,
          },
          {
            parallaxScrollingScale: 1,
            parallaxAdjacentItemScale: 0.5,
            parallaxScrollingOffset: 40,
          }
        )}
        scrollAnimationDuration={2000}
      />
    </View>
  );
}

interface ItemProps {
  index?: number | any;
  source: ImageSourcePropType;
  title: string;
  desc?: string;
}
const CustomItem: React.FC<ItemProps> = ({ source, title, desc, index }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={source}
        resizeMode={"contain"}
        style={{ width: "90%", height: "75%" }}
      />

      <Text className="px-5 text-2xl text-teal-950 font-bold text-center -mt-6">
        {" "}
        {title}{" "}
      </Text>
      <Text className="px-5 text-center mt-2 text-base font-normal text-gray-600 ">
        {" "}
        {desc}{" "}
      </Text>

      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        ]}
      />
    </View>
  );
};

export default Index;
