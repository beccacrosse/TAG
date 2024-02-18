import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper'; 

const FriendOption = ({ userName, profilePic }) => {
  return (
    <Card style={styles.container}>
      <Card.Title style={styles.text}
        title={userName}
        left={(props) => <Avatar.Image {...props} source={profilePic} size={40} />}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Cutive",
    color:'white',
    lineHeight: 20,
  },
});

export default FriendOption;
