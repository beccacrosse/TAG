import React from "react";
import { View, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import TextAnswer from "../../components/signup/textAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";

const Name1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your name?" />
      <TextAnswer navigation={navigation} />
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
