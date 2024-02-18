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
  container: {
    flex: 1,
    alignItems: "center", // Center content horizontally
  },
  card: {
    justifyContent: "center",
    alignItems: "center", // Center content horizontally and vertically
    marginVertical: "5%",
    paddingVertical: "8%",
    paddingHorizontal: "8%",
    backgroundColor: "white",
    height: 196,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  prompt: {
    ...fonts.prompt,
    textAlign: "center",
    margin: 3
  },
});

export default PromptBox;
