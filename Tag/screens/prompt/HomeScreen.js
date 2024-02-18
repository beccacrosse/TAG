import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import Images from '../../assets/images/images';
import TopBar from '../../components/TopBar';
import PromptBox from '../../components/homepage/PromptBox';
import ResponseBox from '../../components/homepage/ResponseBox';
import YourResponse from '../../components/homepage/YourResponse';
import Response from '../../components/homepage/promptResponse';

function HomeScreen({ route }) {
  const { selectedGroupName } = route.params || {};
  const [respondedToday, setRespondedToday] = useState(false);
  const [responses, setResponses] = useState([]); // This will store the array of response texts

  const handleResponseSubmit = (responseText) => {
    setResponses(currentResponses => [...currentResponses, { text: responseText, userName: "You", profilePic: "https://example.com/your-profile-pic.jpg" }]);
    setRespondedToday(true);
  };

  const data = [
    { avi: Images.dia, name: "Example name 1", timestamp: "31", text: "Response text 1" },
    { avi: Images.dia, name: "Example name 2", timestamp: "32", text: "Response text 2" },
    { avi: Images.dia, name: "Example name 3", timestamp: "33", text: "Response text 3" },
    { avi: Images.dia, name: "Example name 4", timestamp: "34", text: "Response text 4" },
    { avi: Images.dia, name: "Example name 5", timestamp: "35", text: "Response text 5" }
  ];

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <PromptBox text="This is an example prompt. How do you feel today?" />
        <YourResponse onSubmit={handleResponseSubmit} />
        {/* {respondedToday ? (
          responses.map((response, index) => (
            <ResponseBox key={index} text={response.text} userName={response.userName} profilePic={response.profilePic} />
          ))
        ) : (
          <YourResponse onSubmit={handleResponseSubmit} />
        )} */}
        <View style={styles.responsesContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Response
                key={index}
                avi={item.avi}
                name={item.name}
                timestamp={item.timestamp}
                text={item.text}
              />
            )}
          />
        </View> 
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
  responsesContainer: {
    alignItems: 'center', // Center content horizontally
  },
});

export default HomeScreen;


