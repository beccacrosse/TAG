import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Colors from "../../branding/Colors";
import QuestionBox from "../../components/signup/questionBox";
import FloatingBackButton from "../../components/backButton";
import ImageButton from "../../components/photoButton";

const ProfilePic3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <QuestionBox question="Add a profile picture!" />
      <ImageButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lazy,
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
