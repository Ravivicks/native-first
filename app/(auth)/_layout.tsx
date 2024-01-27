import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
          animationDuration: 500,
          statusBarAnimation: "fade",
        }}
      />
      <Stack.Screen
        name="loginWithGoogle"
        options={{
          headerShown: false,
          animation: "flip",
          animationDuration: 500,
          statusBarAnimation: "fade",
        }}
      />
      <Stack.Screen
        name="preferences"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
          animationDuration: 500,
          statusBarAnimation: "fade",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
