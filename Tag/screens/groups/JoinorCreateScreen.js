import React from 'react';
import { View, Button } from 'react-native';
import TopBar from '../../components/TopBar'; 

function JoinorCreateScreen({ navigation }) {
  return (
    <View>
      <TopBar />
      <Button
        title="Join Group"
        onPress={() => navigation.navigate('JoinGroup')}
      />
      <Button
        title="Create Group"
        onPress={() => navigation.navigate('CreateGroup')}
      />

    </View>
    
  );
}

export default JoinorCreateScreen;
