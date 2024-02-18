// FloatingBackButton.js
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../branding/Colors";

const FloatingBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="arrow-back" size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: "6%",
    left: "6%",
    zIndex: 10,
  },
});

export default FloatingBackButton;
