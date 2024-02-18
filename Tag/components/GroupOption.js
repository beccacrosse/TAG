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
