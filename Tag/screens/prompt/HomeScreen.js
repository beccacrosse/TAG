import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar'; // Adjust the path as necessary

function HomeScreen({ route }) { // Receive the route prop to access parameters
    // Extract the selected group name from navigation parameters
    const { selectedGroupName } = route.params || {};
    return (
        <View style={styles.container}>
          <TopBar />
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
