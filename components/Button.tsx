import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <Pressable
      className="bg-[#50C2C9] py-[16] px-[140] rounded-lg"
      onPress={onPress}
    >
      <Text className="text-white ">{label}</Text>
    </Pressable>
  );
};

export default Button;
