import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
// import { Ionicons } from "@expo/vector-icons";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey:
    "AIzaSyDGOzVHJysaRfmqAgIynPKZUbgGhmfk8vc",
  authDomain: "mealstogo-a703b.firebaseapp.com",
  projectId: "mealstogo-a703b",
  storageBucket: "mealstogo-a703b.appspot.com",
  messagingSenderId: "226278776241",
  appId:
    "1:226278776241:web:0f380e7a10038241ccf190",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

// const Tab = createBottomTabNavigator();

// const TAB_ICON = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Checkout: "md-cart",
//   Settings: "md-settings",
// };

// const createScreenOptions = ({ route }) => {
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons
//         name={iconName}
//         size={size}
//         color={color}
//       />
//     ),
//   };
// };

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
