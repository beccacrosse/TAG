import React, { useState } from "react";
import { Dimensions, StyleSheet , View, Text} from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

interface promptBoxProps {
  text?: string;
}

const PromptBox: React.FC<promptBoxProps> = (props: promptBoxProps) => {
  let prompt = props.text;
  
  return (
    <View style={styles.card}>
      <Text style={styles.prompt}> {prompt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    backgroundColor: Colors.white,
    height: 196,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginLeft: 20,
    // Full width
    justifyContent: "center",
    // Shadow
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