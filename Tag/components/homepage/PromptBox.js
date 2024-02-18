import React, { useState } from "react";
import { Dimensions, StyleSheet , View, Text} from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

const PromptBox = (props) => {
  const prompt = props.text;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.prompt}> {prompt}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    backgroundColor: Colors.white,
    height: 196,
    width: 326,
    borderRadius: 20,
  },
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    paddingHorizontal: 12,
    justifyContent: "center", 

  },
  surround: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 20,
  },
  prompt: {
    ...fonts.prompt,
    textAlign: "center",
    margin: 3
  },
});

export default PromptBox;
