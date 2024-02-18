import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';

function CreateGroupScreen() {
  const [groupName, setGroupName] = useState('');
  const [groupPin, setGroupPin] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  // Function to generate an 8-digit group pin
  const generateGroupPin = () => Math.random().toString().substr(2, 8);

  // Function to handle creating a group
  const handleCreateGroup = () => {
    const newGroupPin = generateGroupPin(); // Generate a new group pin
    setGroupPin(newGroupPin);
    // Here, you would typically send the data to a backend or store it in state
    console.log(`Group Created: ${groupName} with Pin: ${newGroupPin}`);
    // Reset states if necessary
    setGroupName('');
    setPhoneNumbers([]);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <Text style={styles.header}>Create Group Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Group Name"
          value={groupName}
          onChangeText={setGroupName}
        />
        <Button title="Create Group" onPress={handleCreateGroup} />
        <Text>Group Pin: {groupPin}</Text>
        {/* Additional functionality for adding people and sharing a link would be implemented here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
});

export default CreateGroupScreen;

