import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Fonts from '../branding/Fonts';

const FriendOption = ({ name, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(name)} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    //backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Cutive",
    color:'white',
    lineHeight: 20,
  },
});

export default FriendOption;
