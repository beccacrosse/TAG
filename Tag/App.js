import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SignupProvider } from "./SignupContext";

const fetchFonts = () => {
  return Font.loadAsync({
    Cutive: require("./assets/fonts/Cutive/Cutive-Regular.ttf"),
    CutiveMono: require("./assets/fonts/Cutive_Mono/CutiveMono-Regular.ttf"),
    PermanentMarker: require("./assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf"),
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
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
      <SignupProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SignupProvider>
    );
  }
};

export default App;
