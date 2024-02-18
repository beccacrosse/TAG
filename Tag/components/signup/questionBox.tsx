import React, { useState } from "react";
import { View, StyleSheet, FlexAlignType, Text } from "react-native";
import { KeyboardType } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

interface questionBoxProps {
  alignment?: FlexAlignType;
  keyboardType?: KeyboardType;
  text?: string;
  height?: number;
  width?: number;
}

const QuestionBox: React.FC<questionBoxProps> = (props: questionBoxProps) => {
  let questionText = props.text;

  return (
    <View style={styles.surround}>
      <Text style={styles.question} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  question: {
    ...fonts.question,
    textAlign: "center",
  },
});

export default QuestionBox;
