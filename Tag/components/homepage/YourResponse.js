import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const YourResponse = ({ onSubmit }) => {
  const [responseText, setResponseText] = useState('');

  return (
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          {/* <TextInput
            style={styles.input}
            placeholder="Your response..."
            value={responseText}
            onChangeText={setResponseText}
            multiline
          />
          <Button
            title="Submit"
            onPress={() => {
              onSubmit(responseText); 
              setResponseText(''); 
            }}
          /> */}
        </View>
      </View>

  
  );
};

const styles = StyleSheet.create({
  card: {
    alignContent: "center",
    justifyContent: "center",
    marginVertical: "5%",
    paddingVertical: "8%",
    paddingHorizontal: "8%",
    backgroundColor: "white",
    height: 420,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  inputContainer : {
    
    padding:0
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 200,
    borderRadius: 5,
    minHeight: 100, // Make the text input a bit larger
  },
});

export default YourResponse;
