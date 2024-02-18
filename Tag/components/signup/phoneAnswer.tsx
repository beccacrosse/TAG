import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="___ ___ ____"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        maxLength={10} // Set the max length to 10
      />
      {phoneNumber.length === 10 && ( // Render the button only when phoneNumber length is 10
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => console.log("Go to the next step")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10, // Adjust as needed
    backgroundColor: Colors.white, // Assuming you have a white color defined in Colors
  },
  input: {
    ...fonts.answer,
    padding: 10,

    borderBottomWidth: 1, // To show an underline as in the image
  },
  buttonContainer: {
    marginTop: 10, // Add some spacing above the button
  },
});

export default PhoneInput;
