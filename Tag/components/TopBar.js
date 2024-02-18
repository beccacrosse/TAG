import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default TopBar;
