import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import PhoneAnswer from "../../components/signup/phoneAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";

const Phone6 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your phone number?" />
      <PhoneAnswer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.violet,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
});

export default Phone6;
