import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Colors from "../../branding/Colors";
import PhoneInput from "../../components/signup/phoneAnswer";
import QuestionBox from "../../components/signup/questionBox";
import FloatingBackButton from "../../components/backButton";

const ProfilePic3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox question="What's your phone number?" />
      <PhoneInput />
      <Button title="Next" onPress={() => navigation.navigate("ProfilePic3")} />
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

export default ProfilePic3;
