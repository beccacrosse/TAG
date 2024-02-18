import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { KeyboardType } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";
import NextButton from "../../components/nextButton";

interface textBoxAnswerProps {
  text?: string;
  navigation?: any;
}

const TextInputBox: React.FC<textBoxAnswerProps> = (
  props: textBoxAnswerProps
) => {
  const [text, setText] = useState("");
  let navigation = props.navigation;

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} maxLength={20} />

      {text.length > 0 && (
        <View style={styles.buttonContainer}>
          <NextButton onPress={() => navigation.navigate("Birthday2")} />
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
    marginTop: 10, // Add some spacing above the button
  },
});

export default TextInputBox;
