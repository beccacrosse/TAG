import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { saveUser, removeAllUsers } from "../../DatabaseManager"; // Assuming you have these functions
import Colors from "../../branding/Colors";
import fonts from "../../branding/Fonts";

const { width, height } = Dimensions.get("window");

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
      <Pressable 
        onPress={() => navigation.navigate("Phone6")}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>sign in with your phone number</Text>
      </Pressable>
      <Text style={styles.orText}>OR</Text>

      <Pressable onPress={createNewUser} style={styles.buttonStyle2}>
        <Text style={styles.buttonText2}>create a new account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.rootedLight,
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonStyle: {
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 14, // Adjust this value to get the desired circular shape
    paddingVertical: 10, // Adjust padding for better fit
    paddingHorizontal: 18, // Adjust padding for better fit
    elevation: 2, // Optional, adds a shadow for Android
    marginTop: height * .48,
  },
  buttonStyle2: {
    marginBottom: 5,
    borderRadius: 20, // Adjust this value to get the desired circular shape
    paddingVertical: 10, // Adjust padding for better fit
    paddingHorizontal: 20, // Adjust padding for better fit
    elevation: 2, // Optional, adds a shadow for Android
  },
  buttonText: {
    fontFamily: "Poppins",
    color: Colors.rootedLight,
    fontSize: 18,
    textAlign: "center", // Ensure text is centered within the button
  },
  buttonText2: {
    fontFamily: "Poppins",
    color: Colors.vetiver,
    fontSize: 18,
    textAlign: "center", // Ensure text is centered within the button
  },
  orText: {
    color: Colors.vetiver,
    marginTop: 10,
    marginBottom: 0,
  },
  tagText: {
    ...fonts.loginLogo,
    color: Colors.white,
    alignContent: "center",
    fontSize: 100, // Assuming you set this in fonts.loginLogo
    marginTop: height * 0.13,
  },
});

export default LoginScreen;
