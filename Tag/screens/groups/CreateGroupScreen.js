import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';
import { db } from '../../firebase'; 
import { addDoc, collection } from 'firebase/firestore';

function CreateGroupScreen() {
  const [groupName, setGroupName] = useState('');
  const [groupPin, setGroupPin] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const generateGroupPin = () => Math.random().toString().substr(2, 8);

  const handleCreateGroup = async () => {
    const newGroupPin = generateGroupPin();
    try {
      // Create a new group in Firestore
      await addDoc(collection(db, "groups"), {
        groupName,
        groupPin: newGroupPin,
        phoneNumbers,
      });
      console.log(`Group Created: ${groupName} with Pin: ${newGroupPin}`);
      // Reset states if necessary
      setGroupName('');
      setGroupPin(newGroupPin); // Optionally display the new pin
      setPhoneNumbers([]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default CreateGroupScreen;

