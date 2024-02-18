import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import fonts from "../branding/Fonts";
import Colors from "../branding/Colors";

interface buttonProps {
  height?: number;
  width?: number;
  marginBottom?: number;
  navigation?: any;
}

const IconButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcons name="navigate-next" size={50} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    width: "auto",
    marginTop: 20,
    borderColor: Colors.white,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...fonts.question,
    fontSize: 20,
  },
});

export default IconButton;
