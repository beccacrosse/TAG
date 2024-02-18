// screens/JoinGroupScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function JoinGroupScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Join Group Screen</Text>
      <Button
        title="Go home bruh"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default JoinGroupScreen;
