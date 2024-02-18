// screens/CreateGroupScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function CreateGroupScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create Group Screen</Text>
      <Button
        title="Go home bruh"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default CreateGroupScreen;
