import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import TopBar from '../../components/TopBar';
import GroupSelector from '../../components/GroupSelector';
import FriendSelector from '../../components/FriendSelector';
import Colors from "../../branding/Colors";

const { width, height } = Dimensions.get('window');

const GroupsOrFriends = ({ onSelectionChange, selected }) => {
  return (
    <View style={styles.groupsOrFriendsContainer}>
      <TouchableOpacity 
        onPress={() => onSelectionChange('Groups')} 
        style={[styles.groupsAndFriendsButton, selected === 'Groups' && styles.selectedButton]}>
        <Text style={[styles.groupsAndFriendsText, selected === 'Groups' && styles.selectedText]}>Groups</Text>
      </TouchableOpacity>
      <Text style={styles.groupsAndFriendsText}>/</Text>
      <TouchableOpacity 
        onPress={() => onSelectionChange('Friends')} 
        style={[styles.groupsAndFriendsButton, selected === 'Friends' && styles.selectedButton]}>
        <Text style={[styles.groupsAndFriendsText, selected === 'Friends' && styles.selectedText]}>Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const JoinOrCreateScreen = ({ navigation }) => {
  const [selection, setSelection] = useState('Groups');

  return (
    <View style={styles.mainContainer}>
      <TopBar />
      <View style={styles.section}>
        <GroupsOrFriends onSelectionChange={setSelection} selected={selection} />
      </View>
      <View style={styles.section}>
        {selection === 'Groups' ? <GroupSelector /> : <FriendSelector />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F45634",
    paddingTop: height * 0.03,
  },
  section: {
    marginTop: height * 0.02,
  },
  groupsOrFriendsContainer: {
    paddingTop: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupsAndFriendsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: width * 0.03,
  },
  groupsAndFriendsText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    color: 'white',
  },
  selectedButton: { // Assuming you want some styling for the selected button
    backgroundColor: Colors.lightGrey, // Example color, adjust as needed
  },
  selectedText: {
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 34,
    color: 'white',
  },
});

export default JoinOrCreateScreen;
