import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../branding/Colors";
import FloatingBackButton from "../../components/backButton";
import ImageButton from "../../components/photoButton";
import NextButton from "../../components/nextButton";

const ProfilePic3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <View style={styles.contentContainer}>
        <ImageButton />
        <View style={styles.buttonContainer}>
          <NextButton onPress={() => navigation.navigate("Phone6")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lazy,
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 100, // Adjust this value as needed
  },
});

export default ProfilePic3;
