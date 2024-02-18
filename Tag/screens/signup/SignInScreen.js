import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} />
      <Button title="Sign in >>>" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },
});

export default SignupScreen1;
