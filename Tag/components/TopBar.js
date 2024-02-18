import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Ensure you're using React Navigation v5 or later
import fonts from "../branding/Fonts";

function TopBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
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
          <Text style={styles.buttonText}>Tag</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    paddingHorizontal: 10,
    backgroundColor: "#6200EE",
  },
  textContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    ...fonts.header,
  },
  button: {
    padding: 10,
  },
});

export default TopBar;
