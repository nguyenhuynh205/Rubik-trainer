// import "react-native-gesture-handler";
import * as firebase from "firebase/app";
import Root from "./src/navigations/Root";
import { NativeBaseProvider, StatusBar } from "native-base";
import appTheme from "./src/theme";
import {
  useFonts,
  IBMPlexMono_100Thin,
  IBMPlexMono_100Thin_Italic,
  IBMPlexMono_200ExtraLight,
  IBMPlexMono_200ExtraLight_Italic,
  IBMPlexMono_300Light,
  IBMPlexMono_300Light_Italic,
  IBMPlexMono_400Regular,
  IBMPlexMono_400Regular_Italic,
  IBMPlexMono_500Medium,
  IBMPlexMono_500Medium_Italic,
  IBMPlexMono_600SemiBold,
  IBMPlexMono_600SemiBold_Italic,
  IBMPlexMono_700Bold,
  IBMPlexMono_700Bold_Italic,
} from "@expo-google-fonts/ibm-plex-mono";
import { Provider } from "react-redux";
import store from "./src/store";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_100Thin,
    IBMPlexMono_100Thin_Italic,
    IBMPlexMono_200ExtraLight,
    IBMPlexMono_200ExtraLight_Italic,
    IBMPlexMono_300Light,
    IBMPlexMono_300Light_Italic,
    IBMPlexMono_400Regular,
    IBMPlexMono_400Regular_Italic,
    IBMPlexMono_500Medium,
    IBMPlexMono_500Medium_Italic,
    IBMPlexMono_600SemiBold,
    IBMPlexMono_600SemiBold_Italic,
    IBMPlexMono_700Bold,
    IBMPlexMono_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Root />
      </Provider>
    </NativeBaseProvider>
  );
}
