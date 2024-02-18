import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, Image } from 'react-native';
import fonts from "../../branding/Fonts";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const YourResponse = ({ onSubmit }) => {
  const [responseText, setResponseText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    requestGalleryPermission();
  }, []);

  const requestGalleryPermission = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Please enable gallery access to select photos.');
      }
    } catch (error) {
      console.error('Error requesting gallery permission:', error);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {selectedImage && (
          <View style={styles.selectedImageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: 'transparent' }]} // Remove black outline
            placeholder="Your response..."
            value={responseText}
            onChangeText={setResponseText}
            multiline
          />
        </View>
        <View style={styles.footer}>  
          <View style={{ flexDirection: 'row' }}>
            <Pressable onPress={pickImage}>
              <FontAwesome name="microphone" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => {
              onSubmit(responseText, selectedImage); // Pass selectedImage to the onSubmit function
              setResponseText('');
              setSelectedImage(null); // Clear selected image after submission
            }}>
              <FontAwesome name="photo" size={24} color="black" />
            </Pressable>
          </View>
          <Pressable onPress={() => {
            onSubmit(responseText, selectedImage); // Pass selectedImage to the onSubmit function
            setResponseText('');
            setSelectedImage(null); // Clear selected image after submission
          }}>
            <MaterialCommunityIcons name="send-circle" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    flex: 1,
    alignItems: "center", // Center content horizontally
  },
  card: {
    justifyContent: "center",
    alignItems: "center", // Center content horizontally and vertically
    marginVertical: "5%",
    paddingVertical: "8%",
    paddingHorizontal: "8%",
    backgroundColor: "white",
    height: 235,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  inputContainer: {
    width: "100%", // Ensure the container takes up the full width
  },
  input: {
    ...fonts.question,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10, // Adjust as needed
    borderRadius: 5,
    minHeight: 100, // Make the text input a bit larger
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between children
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  selectedImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  submitButton: {
    ...fonts.submitButton,
    marginRight: 10,
  },
});

export default YourResponse;
