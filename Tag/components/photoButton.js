import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../branding/Colors";
import { Platform } from "react-native";
import Fonts from "../branding/Fonts";
import QuestionBox from "./signup/questionBox";
import { updateUserElement } from "../DatabaseManager"; // Import the function

const ImageButton = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      updateUser(result.assets[0].uri); // Update user data
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      updateUser(result.assets[0].uri); // Update user data
    }
  };

  const updateUser = async (imageuri) => {
    try {
      const phone = "1"; // Or use appropriate user identifier
      const updatedElement = { profilepic: imageuri }; // New photo to update
      await updateUserElement(phone, updatedElement);
      console.log("User element updated successfully");
    } catch (error) {
      console.error("Error updating user element:", error);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
        }
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <QuestionBox text="Add a profile picture!" />
      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload from camera roll</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={takePhoto} style={styles.photoButton}>
        <Text style={styles.photoButtonText}>Take a photo</Text>
      </TouchableOpacity>

      {/* View to maintain layout regardless of image presence */}
      <View style={styles.imagePreviewContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <View style={styles.placeholderPreview}></View> // Placeholder view if no image
        )}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lazy,
  },
  uploadButton: {
    backgroundColor: Colors.mustard,
    borderRadius: 20,
    borderColor: Colors.mustard,
    padding: 20,
    marginVertical: 10,
    width: "70%",
  },
  uploadButtonText: {
    ...Fonts.question, // Assuming you have this style defined in Fonts
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
  },
  photoButton: {
    borderWidth: 1,
    backgroundColor: Colors.mustard,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    borderColor: Colors.mustard,
    width: "70%",
    paddingVertical: 10,
  },
  photoButtonText: {
    ...Fonts.question,
    fontSize: 20,
    color: Colors.white,
    textAlign: "center",
  },
  imagePreviewContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imagePreview: {
    width: "100%",
    borderRadius: 20,
    height: "100%",
  },
  placeholderPreview: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white", // You can set a placeholder background color or leave it transparent
  },
};

export default ImageButton;
