import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Colors from "../../branding/Colors";
import QuestionBox from "../../components/signup/questionBox";
import FloatingBackButton from "../../components/backButton";
import ImageButton from "../../components/photoButton";
import NextButton from "../../components/nextButton";

const ProfilePic3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <ImageButton />
      <View style={styles.button}>
        <NextButton onPress={() => navigation.navigate("Phone6")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lazy,
    padding: 20,
  },
  button: {
    marginBottom: 100,
  },
});

export default ProfilePic3;
