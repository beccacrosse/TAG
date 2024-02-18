import React from 'react';
import { View, Button } from 'react-native';

function JoinorCreateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TopBar />
      <Button
        title="Join Group"
        onPress={() => navigation.navigate('JoinGroup')}
      />
      <Button
        title="Create Group"
        onPress={() => navigation.navigate('CreateGroup')}
      />
      <Button
        title="Go home bruh"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    
  );
}

export default JoinorCreateScreen;
