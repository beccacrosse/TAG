import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import Colors from "../../branding/Colors";
import PhoneInput from "../../components/signup/phoneAnswer";

const SignupScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} />
      <Button title="Next" onPress={() => navigation.navigate("Signup2")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.violet,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
});

export default SignupScreen1;
