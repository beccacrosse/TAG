import React from "react";
import { View, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import BirthdayAnswer from "../../components/signup/birthdayAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";
import { useSignup } from "../../SignupContext"; // Assuming this hook is correctly set up

const Birthday2 = ({ navigation }) => {
  const { saveSignupData } = useSignup(); // Use the context to save data

  // Assuming BirthdayAnswer can call this function with the selected birthday
  const handleSaveBirthday = (birthday) => {
    saveSignupData('birthday', birthday); // Save the birthday to the context
    // Navigate to the next screen or do additional handling here
  };

  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your birthday?" />
      <BirthdayAnswer 
        navigation={navigation} 
        onSaveBirthday={handleSaveBirthday} // Pass the function to save the birthday
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.sherbert,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
});

export default Birthday2;
