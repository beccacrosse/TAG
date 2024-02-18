import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Fonts from "../branding/Fonts";
import Colors from "../branding/Colors";

const GroupOption = ({ name, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(name)} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: Colors.white,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 20,
    width: "70%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Cutive",
    color: Colors.white,
    lineHeight: 20,
  },
});

export default GroupOption;
