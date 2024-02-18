import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import TextAnswer from "../../components/signup/textAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";
import { useSignup } from "../../SignupContext";
import { updateUserElement } from "../../DatabaseManager"; // Import the function

const Name1 = ({ navigation }) => {
  const { saveSignupData } = useSignup();
  const updateUser = async ({ name }) => {
    try {
      // Retrieve the user's data from AsyncStorage
      const phone = "1";
      const updatedElement = { name: name }; // New name to update
      await updateUserElement(phone, updatedElement);
      console.log("User element updated successfully");
    } catch (error) {
      console.error("Error updating user element:", error);
    }
  };

  const handleNext = (name) => {
    saveSignupData("name", name); // Save the name to the context
    updateUser(name);

    navigation.navigate("Birthday2"); // Navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your name?" />
      <TextAnswer navigation={navigation} onNameSubmit={handleNext} />
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
