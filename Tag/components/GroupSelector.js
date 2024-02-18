import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GroupOption from './GroupOption'; 
import { useNavigation } from '@react-navigation/native';

const GroupSelector = () => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const navigation = useNavigation(); 

  const handleSelectGroup = (groupName) => {
    setSelectedGroup(groupName);
    navigation.navigate('Home', { selectedGroupName: groupName }); 
  };

  return (
    <View style={styles.container}>
      <GroupOption name="Group 1" onSelect={handleSelectGroup} />
      <GroupOption name="Group 2" onSelect={handleSelectGroup} />
      <GroupOption name="Group 3" onSelect={handleSelectGroup} />

      {/* This Text component can be removed or kept for debugging purposes */}
      <Text style={styles.selectedText}>Selected Group: {selectedGroup}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GroupSelector;
