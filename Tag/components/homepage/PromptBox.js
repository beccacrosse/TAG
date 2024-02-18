import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

import { Avatar, Button, Card, Text } from 'react-native-paper';

const PromptBox = (props) => {
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
    paddingVertical: 30,
    paddingHorizontal: 12,
    marginLeft: 20,
    justifyContent: "center",

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
    color: "black"
  },
});

export default PromptBox;
