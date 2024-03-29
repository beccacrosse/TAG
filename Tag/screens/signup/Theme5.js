import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Theme5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter query here" style={styles.input} />
      <Button title="Next >" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default Theme5;
