import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Fonts from "../branding/Fonts";
import Colors from "../branding/Colors";
import { FontAwesome6 } from "@expo/vector-icons";

const GroupOption = ({ name, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(name)} style={styles.container}>
      <FontAwesome6
        name="people-group"
        size={24}
        color="white"
        marginHorizontal={10}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cutive",
    color: Colors.white,
    lineHeight: 30,
  },
});

export default GroupOption;
