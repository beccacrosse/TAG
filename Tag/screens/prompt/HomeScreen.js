import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar'; 
import PromptBox from '../../components/homepage/PromptBox';
import ResponseBox from '../../components/homepage/ResponseBox';

function HomeScreen({ route }) { 
    const { selectedGroupName } = route.params || {};
    <PromptBox/>
    return (
        <View style={styles.container}>
          <TopBar />
          <PromptBox text="This is an example prompt. How do you feel today?"/>
          <ResponseBox text="This is a response." userName="John Doe" profilePic="https://example.com/profile.jpg"
            />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Display the selected group's name */}
            {selectedGroupName && <Text style={styles.groupName}>Selected Group: {selectedGroupName}</Text>}
            <Text>Home Screen</Text>
            {/* Load in responses here. For example, this could be a list of items */}
          </ScrollView>

        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20, // Adjust padding as needed
  },
});

export default HomeScreen;
