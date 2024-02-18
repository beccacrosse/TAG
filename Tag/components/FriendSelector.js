import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../branding/Fonts';
import FriendOption from './FriendOption';

//this is not currently scrollable, need to implement for future use
const FriendSelector = () => {
  const [selectedFriend, setSelectedFriend] = useState('');
  const navigation = useNavigation(); 

  const handleSelectFriend = (FriendName) => {
    setSelectedFriend(FriendName); // Corrected from setSelectedGroup to setSelectedFriend
    navigation.navigate('Home', { selectedFriendName: FriendName }); 
  };

  return (
    <View style={[styles.container]}>
      <FriendOption name="Bhad Baby" onSelect={handleSelectFriend} />
      <FriendOption name="FloMo Dining" onSelect={handleSelectFriend} />
      <FriendOption name="Lucy's Dad" onSelect={handleSelectFriend} />
    </View>
  );
};

//{/* This Text component can be removed or kept for debugging purposes */} put above
//<Text style={styles.selectedText}>Selected Group: {selectedGroup}</Text>

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Cutive",
    color:'#00FFFFF',
  },
});

export default FriendSelector;
