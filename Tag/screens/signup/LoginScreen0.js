import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { saveUser, removeAllUsers } from "../../DatabaseManager";
import Colors from "../../branding/Colors";
import fonts from "../../branding/Fonts";

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
      <Text style={styles.tagText}>Tag</Text>
      <Pressable onPress={() => navigation.navigate("Phone6")}>
        <Text style={styles.text}>sign in with your phone number</Text>
      </Pressable>
      <Text style={styles.orText}>OR</Text>

      <Pressable onPress={() => createNewUser()}>
              <Text style={styles.smallerText}>create a new account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.rootedLight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    marginTop: 20,
    marginBottom: 5,
    fontFamily: "Poppins",
    color: Colors.white,
    fontSize: 18,
  },
  smallerText: {
    fontFamily: "Poppins",
    color: Colors.vetiver,
    fontSize: 16,
  },
  orText: {
    color: Colors.vetiver,
    marginTop: 10,
    marginBottom:0
  },
  tagText: {
    ...fonts.loginLogo,
    alignContent: "center",
  },
});

export default LoginScreen;
