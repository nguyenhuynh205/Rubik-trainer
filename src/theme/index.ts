import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

const newColorTheme = {
  test: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E",
  },
  fontConfig: {
    IBMPlexMono: {
      100: {
        normal: "IBMPlexMono_100Thin",
        italic: "IBMPlexMono_100Thin_Italic",
      },
      200: {
        normal: "IBMPlexMono_200ExtraLight",
        italic: "IBMPlexMono_200ExtraLight_Italic",
      },
      300: {
        normal: "IBMPlexMono_300Light",
        italic: "IBMPlexMono_300Light_Italic",
      },
      400: {
        normal: "IBMPlexMono_400Regular",
        italic: "IBMPlexMono_400Regular_Italic",
      },
      500: {
        normal: "IBMPlexMono_500Medium",
        italic: "IBMPlexMono_500Medium_Italic",
      },
      600: {
        normal: "IBMPlexMono_600SemiBold",
        italic: "IBMPlexMono_600SemiBold_Italic",
      },
      700: {
        normal: "IBMPlexMono_700Bold",
        italic: "IBMPlexMono_700Bold_Italic",
      },
    },
  },
  fonts: {
    heading: "IBMPlexMono",
    body: "IBMPlexMono",
    mono: "IBMPlexMono",
  },
};
const appTheme = extendTheme({ colors: newColorTheme });
export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
