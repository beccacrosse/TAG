import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import NextButton from "../../components/nextButton";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

const TextInputBox = ({ onNameSubmit }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        maxLength={20}
      />
      {text.length > 0 && (
        <View style={styles.buttonContainer}>
          <NextButton onPress={() => onNameSubmit(text)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    ...fonts.answer,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default TextInputBox;
