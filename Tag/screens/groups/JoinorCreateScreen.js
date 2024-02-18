import React from 'react';
import { View, Button } from 'react-native';
import TopBar from '../../components/TopBar'; 
import GroupSelector from '../../components/GroupSelector';

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
      <GroupSelector/>

    </View>
    
  );
}

export default JoinorCreateScreen;
