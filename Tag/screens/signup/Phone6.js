// Phone6.js
import React from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import QuestionBox from "../../components/signup/questionBox";
import PhoneAnswer from "../../components/signup/phoneAnswer";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";
import { useSignup } from "../../SignupContext";

const Phone6 = ({ navigation }) => {
  const {
    phoneNumber,
    name,
    birthday,
    profilePicURL,
    setPhoneNumber,
    setName,
    setBirthday,
    setProfilePicURL,
    saveUserDataToFirestore,
  } = useSignup();

  const handleSignUp = () => {
    // Validate user data
    if (!phoneNumber || !name || !birthday || !profilePicURL) {
      console.log('phoneNumber:', phoneNumber);
      console.log('name:', name);
      console.log('birthday:', birthday);
      console.log('profilePicURL:', profilePicURL);
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    saveUserDataToFirestore();
  };

  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox text="What is your phone number?" />
      <PhoneAnswer
        navigation={navigation}
      />
      {/* Additional questions and components for collecting user data */}
      <Button title="Sign Up" onPress={handleSignUp} />
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

