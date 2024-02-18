import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Images from '../../assets/images/images';
import TopBar from '../../components/TopBar';
import PromptBox from '../../components/homepage/PromptBox';
import YourResponse from '../../components/homepage/YourResponse';
import Response from '../../components/homepage/promptResponse';
import Colors from '../../branding/Colors';

function HomeScreen({ route }) {
  const data = [
    { avi: Images.dia, name: "Example name 1", timestamp: "31", text: "Response text 1" },
    { avi: Images.dia, name: "Example name 2", timestamp: "32", text: "Response text 2" },
    { avi: Images.dia, name: "Example name 3", timestamp: "33", text: "Response text 3" },
    { avi: Images.dia, name: "Example name 4", timestamp: "34", text: "Response text 4" },
    { avi: Images.dia, name: "Example name 5", timestamp: "35", text: "Response text 5" }
  ];
  const { selectedGroupName } = route.params || {};
  const [respondedToday, setRespondedToday] = useState(false);
  const [responses, setResponses] = useState(data); // This will store the array of response texts

  const myName = "Dia testing";
  const myPfp = Images.dia;
  const myTimestamp = "1 min ago";

  const handleResponseSubmit = (responseText) => {
    setResponses(currentResponses => [
      ...currentResponses,
      { text: responseText, userName: myName, avi: myPfp, timestamp: myTimestamp }
    ]);
    setRespondedToday(true);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView>
        <PromptBox text="This is an example prompt. How do you feel today?" />
        {!respondedToday && <YourResponse onSubmit={handleResponseSubmit} />}
        <View style={respondedToday? styles.responsesContainer : {display: "none"}}>
          <FlatList
            data={responses}
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
        {selectedGroupName && <Text style={styles.groupName}>Tagging... {selectedGroupName}</Text>}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
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


