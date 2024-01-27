import { View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button, Icon, TextInput, HelperText } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, User } from "../../utilis/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "expo-router";

const Login = () => {
  const { setUser } = useAuth();
  const navigation: any = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = (data: User) => {
    setUser({
      name: data.username,
    });
  };

  const hasError = errors ? true : false;

  return (
    <SafeAreaView className="flex-1 px-5 justify-center">
      <Card className="justify-center p-3">
        <Card.Content>
          <View className="self-center ">
            <Icon source="heart" size={40} />
          </View>
          <Card.Title
            title="Welcome Back!"
            titleStyle={{
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: 22,
            }}
          />
          <View className="gap-3">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Username"
                  mode="outlined"
                  right={<TextInput.Icon icon="account-outline" />}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            <HelperText type="error" visible={hasError}>
              {errors.username?.message}
            </HelperText>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Password"
                  mode="outlined"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            <HelperText type="error" visible={hasError}>
              {errors.password?.message}
            </HelperText>
          </View>
          <Button
            mode="contained"
            icon="send"
            contentStyle={{
              flexDirection: "row-reverse",
              paddingVertical: 8,
              gap: 10,
            }}
            style={{ marginTop: 30 }}
            onPress={handleSubmit(onSubmit)}
          >
            Login Now
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default Login;
