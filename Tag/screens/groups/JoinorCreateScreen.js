import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import TopBar from '../../components/TopBar'; 
import GroupSelector from '../../components/GroupSelector';
import FriendSelector from '../../components/FriendSelector';
import Colors from "../../branding/Colors";
import Fonts from '../../branding/Fonts';
const { width, height } = Dimensions.get('window');

const GroupsOrFriends = ({ selected, setSelected }) => {
  const handleGroupsPress = () => {
    setSelected('Groups');
  };

  const handleFriendsPress = () => {
    setSelected('Friends');
  };

  return (
    <View style={styles.groupsOrFriendsContainer}>
      <TouchableOpacity 
        onPress={handleGroupsPress} 
        style={[styles.groupsAndFriendsButton, selected === 'Groups' && styles.selectedButton]}>
        <Text style={[styles.groupsAndFriendsText, selected === 'Groups' && styles.selectedText]}>Groups</Text>
      </TouchableOpacity>
      <Text style={styles.groupsAndFriendsText}>/</Text>
      <TouchableOpacity 
        onPress={handleFriendsPress} 
        style={[styles.groupsAndFriendsButton, selected === 'Friends' && styles.selectedButton]}>
        <Text style={[styles.groupsAndFriendsText, selected === 'Friends' && styles.selectedText]}>Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const CreateOrJoinGroup = ({ navigation }) => {
  const handleCreatePress = () => {
    navigation.navigate('CreateGroup');
  };

  const handleJoinPress = () => {
    navigation.navigate('JoinGroup');
  };

  return (
    <View style={styles.groupsOrFriendsContainer}>
      <TouchableOpacity onPress={handleCreatePress} style={styles.button}>
        <Text style={styles.buttonText}>Create Group</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleJoinPress} style={styles.button}>
        <Text style={styles.buttonText}>Join Group</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  groupsOrFriendsContainer: {
    paddingTop: height*.01,
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (width * 0.2) / 2, // Example for circular buttons (adjust as needed)
    width: width * 0.3, // Should be the same as height for a circle
    height: width * 0.1, // Should be the same as width for a circle
    marginHorizontal: width * 0.02,
    borderWidth: 1,
    borderColor: Colors.white,
    //padding: 10, // Add padding to increase touchable area if needed
  },
  selectedButton: {
    //backgroundColor: 'blue', // or any other color that indicates selection
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 30,
    color: "white", // White font color
    fontFamily: "Cutive",
  },
  groupsAndFriendsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add padding to increase touchable area if needed
    marginHorizontal: width * 0.03,
    color: 'white',
  },
  groupsAndFriendsText: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: "Cutive",
    lineHeight: 30,
    color: 'white',
  },
  selectedText: {
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: "Cutive",
    lineHeight: 40,
    color: 'white',
  },
});

const bigScreen = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F45634", // Placeholder for your actual background color
    paddingTop: height * 0.03,
  },
  section: {
    marginTop: height * 0.02,
  },
  weirdSection: {
    marginTop: 0,
  },
  groupSection: {
    marginTop: height * 0.02,
    marginLeft:width*.01,
    marginRight: width*.01,
  }
});

const JoinOrCreateScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('Groups');

  return (
    <View style={bigScreen.mainContainer}>
      <TopBar />
      <View style={bigScreen.section}>
        <GroupsOrFriends selected={selected} setSelected={setSelected} />
      </View>
      <View style={bigScreen.weirdSection}>
        <CreateOrJoinGroup navigation={navigation} />
      </View>
      <View style={bigScreen.groupSection}>
        {selected === 'Groups' ? (
          <GroupSelector />
        ) : (
          <FriendSelector />
        )}
      </View>
    </View>
  );
};

export default JoinOrCreateScreen;