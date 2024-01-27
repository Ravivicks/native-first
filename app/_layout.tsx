import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import { Platform } from "react-native";
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import React from "react";
import { PreferencesContext } from "../context/PreferencesContext";
import LightTheme, { DarkTheme } from "../utilis/theme";

export default function RootLayout() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? DarkTheme : LightTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                statusBarColor: "black",
              }}
            />
            <Stack.Screen
              name="(auth)"
              options={{
                title: "",
                headerShown: false,
                headerTransparent: Platform.OS === "ios",
                headerBlurEffect: "regular",
                statusBarColor: "black",
              }}
            />
          </Stack>
        </AuthProvider>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
