import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';
import PromptBox from '../../components/homepage/PromptBox';
import ResponseBox from '../../components/homepage/ResponseBox';
import YourResponse from '../../components/homepage/YourResponse';

function HomeScreen({ route }) {
  const { selectedGroupName } = route.params || {};
  const [respondedToday, setRespondedToday] = useState(false);
  const [responses, setResponses] = useState([]); // This will store the array of response texts

  const handleResponseSubmit = (responseText) => {
    setResponses(currentResponses => [...currentResponses, { text: responseText, userName: "You", profilePic: "https://example.com/your-profile-pic.jpg" }]);
    setRespondedToday(true);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <PromptBox text="This is an example prompt. How do you feel today?" />
        {respondedToday ? (
          responses.map((response, index) => (
            <ResponseBox key={index} text={response.text} userName={response.userName} profilePic={response.profilePic} />
          ))
        ) : (
          <YourResponse onSubmit={handleResponseSubmit} />
        )}
        {selectedGroupName && <Text style={styles.groupName}>Selected Group: {selectedGroupName}</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1, // Ensures scrollView takes up the full space of its container
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures content grows to fit
    justifyContent: 'center', // Centers content vertically in the scrollView
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center', // Centers groupName text
  },
});

export default HomeScreen;


