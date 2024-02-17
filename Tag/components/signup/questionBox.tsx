import React, { useState } from "react";
import { View, StyleSheet, FlexAlignType } from "react-native";
import Colors from "../branding/Colors";

interface questionBoxProps {
  alignment?: FlexAlignType;
  keyboardType?: KeyboardType;
  onChange?: (text: string) => void;
  placeholder?: string;
  height?: number;
  width?: number;
  onConfirm?: (text: string) => void;
  disabled?: boolean;
}

const QuestionBox: React.FC<questionBoxProps> = (props: questionBoxProps) => {
  const [inputText, setInputText] = useState("");
  let textBoxStyle = StyleSheet.compose(styles.container, {
    alignItems: props.alignment,
    height: props.height,
    width: props.width,
  });

  return (
    <View style={styles.surround}>
      <View style={textBoxStyle}>
        <View style={styles.inputBox}>
          <questionBox
            style={styles.input}
            placeholder={props.placeholder}
            value={inputText}
            placeholderTextColor={Colors.darkGray}
            keyboardType={props.keyboardType}
            onChangeText={(text) => {
              setInputText(text);
              if (props.onChange) props.onChange(text);
            }}
            onSubmitEditing={() => {
              if (props.onConfirm) props.onConfirm(inputText);
            }}
            clearButtonMode="never"
          />
        </View>
      </View>
      {props.onConfirm && inputText && !props.disabled && (
        <FabButton
          onPress={() => {
            props.onConfirm && props.onConfirm(inputText);
          }}
        >
          <ArrowRight color="black" width={30} height={30} strokeWidth={2} />
        </FabButton>
      )}
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
  image: {
    marginRight: 10,
    maxHeight: 25,
    maxWidth: 40,
    aspectRatio: 1,
  },
  inputBox: {
    flexDirection: "row",
  },
  input: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});

export default QuestionBox;
