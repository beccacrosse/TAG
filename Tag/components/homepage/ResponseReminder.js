import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import rhea from "../../assets/images/rhea.png";
import julia from "../../assets/images/julia.jpeg";
import dia from "../../assets/images/dia.png";
import lucy from "../../assets/images/lucy.jpg";

const ResponseReminder = ({ numberOfResponses, onRespond }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Respond to view all responses 👀</Text>
      <View style={styles.imageContainer}>
        <Image source={rhea} style={styles.profileImage} />
        <Image source={julia} style={styles.profileImage} />
        <Image source={dia} style={styles.profileImage} />
        <Image source={lucy} style={styles.profileImage} />
      </View>
      <TouchableOpacity onPress={onRespond} style={styles.responseButton}>
        <Text style={styles.responsesText}>
          {numberOfResponses} 32 responses
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  promptText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: -15, // Adjust the overlap of the images
  },
  responseButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  responsesText: {
    color: "white", // Adjust text color to match your theme
    fontSize: 16,
  },
});

export default ResponseReminder;
