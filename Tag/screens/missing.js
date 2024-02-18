import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../branding/Colors";
import FloatingBackButton from "../components/backButton";

const InProgressScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <Text style={styles.text}>This feature is still in progress.</Text>
      <Text style={styles.text}>Please check back later.</Text>
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
  text: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default InProgressScreen;
