import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { saveUser } from "../../DatabaseManager";

function LoginScreen({ navigation }) {
  const createNewUser = async () => {
    // New user data
    const newUserData = {
      name: "BLANK",
      profilepic: "BLANK",
      phone: "1",
    };

    // Save the new user to AsyncStorage
    await saveUser(newUserData);

    navigation.navigate("Name1");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you already have an account?</Text>

      <Button
        title="Sign In with Phone Number"
        onPress={() => navigation.navigate("Phone6")}
      />

      <Text style={styles.orText}>OR</Text>

      <Button title="Create New Account" onPress={() => createNewUser()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  orText: {
    marginVertical: 20,
  },
});

export default LoginScreen;
