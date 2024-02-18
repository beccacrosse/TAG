import React from "react";
import { View, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import BirthdayAnswer from "../../components/signup/birthdayAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";

const Birthday2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your birthday?" />
      <BirthdayAnswer navigation={navigation} />
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
