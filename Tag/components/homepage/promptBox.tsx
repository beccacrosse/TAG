import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

import { Avatar, Button, Card, Text } from 'react-native-paper';

interface promptBoxProps {
  text?: string;
}

const PromptBox: React.FC<promptBoxProps> = (props: promptBoxProps) => {
  let prompt = props.text;
  
  return (
    <Card>
      <Card.Content>
        <Text style={styles.question}>{prompt}</Text>
      </Card.Content>
    </Card>
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

export default PromptBox;