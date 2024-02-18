import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { KeyboardType } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";
import NextButton from "../../components/nextButton";

interface phoneAnswerProps {
  keyboardType?: KeyboardType;
  text?: string;
  height?: number;
  width?: number;
  navigation?: any;
}

const formatPhoneNumber = (phoneNumber) => {
  // Function to format phone number as the user types
  let formattedNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
  if (formattedNumber.length > 6) {
    // Format as "123 456 7890" for simplicity
    return `${formattedNumber.slice(0, 3)} ${formattedNumber.slice(
      3,
      6
    )} ${formattedNumber.slice(6, 10)}`;
  } else if (formattedNumber.length > 3) {
    // Format as "123 456" partway through
    return `${formattedNumber.slice(0, 3)} ${formattedNumber.slice(3, 6)}`;
  } else {
    // No formatting needed for first three digits
    return formattedNumber;
  }
};
const PhoneInput: React.FC<phoneAnswerProps> = (props: phoneAnswerProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  let navigation = props.navigation;

  // Update to use formatPhoneNumber
  const handleChange = (text) => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange} // Use handleChange here
        value={phoneNumber}
        placeholder="___ ___ ____"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        maxLength={14} // Update maxLength to accommodate spaces
      />

      {phoneNumber.length === 12 && ( // Adjust condition to check for formatted length
        <View style={styles.buttonContainer}>
          <NextButton onPress={() => navigation.navigate("JoinorCreate")} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    ...fonts.answer,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10, // Add some spacing above the button
  },
});

export default PhoneInput;
