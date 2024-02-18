import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const YourResponse = ({ onSubmit }) => {
  const [responseText, setResponseText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
