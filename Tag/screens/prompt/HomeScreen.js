import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Images from '../../assets/images/images';
import TopBar from '../../components/TopBar';
import PromptBox from '../../components/homepage/PromptBox';
import YourResponse from '../../components/homepage/YourResponse';
import Response from '../../components/homepage/promptResponse';
import Colors from '../../branding/Colors';

function HomeScreen({ route }) {
  const prompt1 = "What lesson took you the longest to unlearn?";
  const data1 = [
    { avi: Images.rhea, name: "Rhea Malhotra", timestamp: "2:45", text: "perfectionism isn't the key to success :)" },
    { avi: Images.julia, name: "Julia Rhee", timestamp: "3:15", text: "I've been realizing that it's not selfish to prioritize your own needs. definitely prioritizing self care lately" },
    { avi: Images.lucy, name: "Lucy Zimmerman", timestamp: "4:22", text: "Not everyone has to like you! sometimes it's an impossible goal that can cause you to compromise your values and identity" },
    { avi: Images.sam, name: "Sam Cohn", timestamp: "4:49", text: "It's not a sign of weakness to be vulnerable" },
    { avi: Images.dia, name: "Dia Crosse", timestamp: "9:41", text: "You can't change people. I've spent years thinking I could change people's behaviors if I just tried hard enough or was patient enough." }
  ];
  const prompt2 = "What your most toxic trait that you can admit to?";
  const data2 = [
    { avi: Images.rachel, name: "Rachel Liu", timestamp: "1:25", text: "Procrastination. i've definitely missed opportunities and added stress to my life, because I'm working til the last minute." },
    { avi: Images.maya, name: "Maya Alvarez-Coyne", timestamp: "2:45", text: "my need for control sometimes" },
    { avi: Images.lucy, name: "Lucy Zimmerman", timestamp: "4:52", text: "My most toxic trait is holding grudges. I tend to hold onto negative feelings and let them fester, which not only affects my peace of mind but also my relationships with others" },
    { avi: Images.sam, name: "Sam Cohn", timestamp: "5:19", text: "Sometimes I may take jokes too far and over use sarcasm generally." },
    { avi: Images.rhea, name: "Rhea Malhotra", timestamp: "7:11", text: "My most toxic trait, which took me a long time to recognize and admit, is my tendency to be overly critical, both of myself and others" }
  ];
  const prompt3 = "What's something you changed your mind on recently?";
  const data3 = [
    { avi: Images.sam, name: "Sam Cohn", timestamp: "2:45", text: "I've just been pretty stressed with school and balancing soccer on top of everything else going on :/" },
    { avi: Images.julia, name: "Julia Rhee", timestamp: "3:15", text: "I feel like I need to make more time to talk to my family & call my parents." },
    { avi: Images.riley, name: "Riley Feng", timestamp: "4:22", text: "My job has been a lot of pressure lately. I think I need to adjust my hours to have time to relax on the weekends." },
    { avi: Images.morgan, name: "Morgan Moreno", timestamp: "4:49", text: "I hope my cousins are doing okay!" },
    { avi: Images.dg, name: "Diyva Ganesan", timestamp: "9:41", text: "Sometimes I'm just too curious about things." }
  ];
  
  const { selectedGroupName } = route.params || {};
  const [currentPrompt, setCurrentPrompt] = useState(prompt1);
  const [responses, setResponses] = useState(data1); 

  const myName = "Lucy Zimmerman"
  const myPfp = Images.lucy
  const myTimestamp = "1 min ago"

  const handleResponseSubmit = (responseText) => {
    setResponses(currentResponses => [
      ...currentResponses,
      { text: responseText, userName: myName, avi: myPfp, timestamp: myTimestamp }
    ]);
  };
  useEffect(() => {
    switch (selectedGroupName) {
      case 'Group 1':
        setCurrentPrompt(prompt1);
        setResponses(data1);
        break;
      case 'Group 2':
        setCurrentPrompt(prompt2);
        setResponses(data2);
        break;
      case 'Group 3':
        setCurrentPrompt(prompt3);
        setResponses(data3);
        break;
      default:
        setCurrentPrompt(prompt1);
        setResponses(data1);
    }
  }, [selectedGroupName]);

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView>
        <PromptBox text={currentPrompt} />
         <YourResponse onSubmit={handleResponseSubmit} />
        <View style={styles.responsesContainer}>
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
    flex: 1, 
  },
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center',
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center',
  },
  responsesContainer: {
    alignItems: 'center', 
  },
});

export default HomeScreen;


