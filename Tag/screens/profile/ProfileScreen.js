import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar'; 

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text>Calendar Component here tbh</Text>
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

export default ProfileScreen;