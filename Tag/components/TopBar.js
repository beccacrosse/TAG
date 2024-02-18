import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Ensure you're using React Navigation v5 or later

function TopBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("JoinorCreate")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Groups</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#6200EE",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    padding: 10,
  },
});

export default TopBar;
