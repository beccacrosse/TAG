import { StyleSheet } from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";
import React, { useEffect, useState } from "react";
import { Avatar, Card, Text } from "react-native-paper";

const ResponseBox = (props) => {
  const { text, userName, pp } = props;

  return (
    <Card style={styles.container}>
      <Card.Title
        title={userName}
        left={(props) => <Avatar.Image {...props} size={40} />} // Display the profile picture
        leftStyle={styles.avatar}
      />
      <Card.Content>
        <Text style={styles.question}>{text}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
  },
  avatar: {
    marginRight: 10,
  },
  question: {
    ...fonts.question,
    textAlign: "center",
    color: "black",
  },
});

export default ResponseBox;
