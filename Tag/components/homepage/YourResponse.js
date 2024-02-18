import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import fonts from "../../branding/Fonts";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const YourResponse = ({ onSubmit }) => {
  const [responseText, setResponseText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your response..."
            value={responseText}
            onChangeText={setResponseText}
            multiline
          />
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Pressable onPress={() => {}}>
              <FontAwesome name="microphone" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => {}}>
              <FontAwesome name="photo" size={24} color="black" />
            </Pressable>
          </View>
          <Pressable onPress={() => {
            onSubmit(responseText); 
            setResponseText(''); 
          }}>
            <MaterialCommunityIcons name="send-circle" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    flex: 1,
    alignItems: "center", // Center content horizontally
  },
  card: {
    justifyContent: "center",
    alignItems: "center", // Center content horizontally and vertically
    marginVertical: "5%",
    paddingVertical: "8%",
    paddingHorizontal: "8%",
    backgroundColor: "white",
    height: 235,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  inputContainer: {
    width: "100%", // Ensure the container takes up the full width
  },
  input: {
    ...fonts.question,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10, // Adjust as needed
    borderRadius: 5,
    minHeight: 100, // Make the text input a bit larger
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default YourResponse;
