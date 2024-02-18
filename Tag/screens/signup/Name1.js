import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import TextAnswer from "../../components/signup/textAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";
import { useSignup } from "../../SignupContext";

const Name1 = ({ navigation }) => {
  const { saveSignupData } = useSignup();

  const handleNext = (name) => {
    saveSignupData('name', name); // Save the name to the context
    navigation.navigate("Birthday2"); // Navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation}/>
      <QuestionBox text="What is your name?" />
      <TextAnswer
        navigation={navigation}
        onNameSubmit={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.rootedLight,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
});

export default Name1;
