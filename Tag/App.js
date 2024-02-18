import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AppLoading from "expo-app-loading"; // Corrected import
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    Cutive: require("./assets/fonts/Cutive/Cutive-Regular.ttf"),
    CutiveMono: require("./assets/fonts/Cutive_Mono/CutiveMono-Regular.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.warn(err)}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
};

export default App;
