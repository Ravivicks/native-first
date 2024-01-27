import { DefaultTheme } from "react-native-paper";

const LightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(0, 105, 110)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(111, 246, 254)",
    onPrimaryContainer: "rgb(0, 32, 34)",
    secondary: "rgb(74, 99, 100)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(204, 232, 233)",
    onSecondaryContainer: "rgb(4, 31, 33)",
    tertiary: "rgb(78, 95, 125)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(214, 227, 255)",
    onTertiaryContainer: "rgb(8, 28, 54)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 252)",
    onBackground: "rgb(25, 28, 28)",
    surface: "rgb(250, 253, 252)",
    onSurface: "rgb(25, 28, 28)",
    surfaceVariant: "rgb(218, 228, 229)",
    onSurfaceVariant: "rgb(63, 73, 73)",
    outline: "rgb(111, 121, 121)",
    outlineVariant: "rgb(190, 200, 201)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(45, 49, 49)",
    inverseOnSurface: "rgb(239, 241, 241)",
    inversePrimary: "rgb(76, 217, 225)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 245)",
      level2: "rgb(230, 241, 241)",
      level3: "rgb(223, 237, 236)",
      level4: "rgb(220, 235, 235)",
      level5: "rgb(215, 232, 232)",
    },
    surfaceDisabled: "rgba(25, 28, 28, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 28, 0.38)",
    backdrop: "rgba(41, 50, 51, 0.4)",
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
  animation: {
    ...DefaultTheme.animation,
  },
};

export const DarkTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,

  colors: {
    primary: "rgb(76, 217, 225)",
    onPrimary: "rgb(0, 55, 57)",
    primaryContainer: "rgb(0, 79, 83)",
    onPrimaryContainer: "rgb(111, 246, 254)",
    secondary: "rgb(177, 204, 205)",
    onSecondary: "rgb(27, 52, 54)",
    secondaryContainer: "rgb(50, 75, 77)",
    onSecondaryContainer: "rgb(204, 232, 233)",
    tertiary: "rgb(182, 199, 233)",
    onTertiary: "rgb(32, 49, 76)",
    tertiaryContainer: "rgb(54, 71, 100)",
    onTertiaryContainer: "rgb(214, 227, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(25, 28, 28)",
    onBackground: "rgb(224, 227, 227)",
    surface: "rgb(25, 28, 28)",
    onSurface: "rgb(224, 227, 227)",
    surfaceVariant: "rgb(63, 73, 73)",
    onSurfaceVariant: "rgb(190, 200, 201)",
    outline: "rgb(137, 147, 147)",
    outlineVariant: "rgb(63, 73, 73)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(224, 227, 227)",
    inverseOnSurface: "rgb(45, 49, 49)",
    inversePrimary: "rgb(0, 105, 110)",
    elevation: {
      level0: "transparent",
      level1: "rgb(28, 37, 38)",
      level2: "rgb(29, 43, 44)",
      level3: "rgb(31, 49, 50)",
      level4: "rgb(31, 51, 52)",
      level5: "rgb(32, 55, 56)",
    },
    surfaceDisabled: "rgba(224, 227, 227, 0.12)",
    onSurfaceDisabled: "rgba(224, 227, 227, 0.38)",
    backdrop: "rgba(41, 50, 51, 0.4)",
  },

  fonts: {
    ...DefaultTheme.fonts,
  },
  animation: {
    ...DefaultTheme.animation,
  },
};

export default LightTheme;

declare global {
  namespace ReactNativePaper {
    interface Theme {
      colors: object;
      fonts: object;
      animation: object;
    }
  }
}
