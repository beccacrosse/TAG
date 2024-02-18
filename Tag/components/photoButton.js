import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../branding/Colors";
import { Platform } from "react-native";
import Fonts from "../branding/Fonts";
import QuestionBox from "./signup/questionBox";

const ImageButton = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
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
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <TouchableOpacity onPress={takePhoto} style={styles.photoButton}>
        <Text style={styles.photoButtonText}>Take a photo</Text>
      </TouchableOpacity>
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
    ...Fonts.question, // Assuming you have this style defined in Fonts
    color: Colors.white,
    textAlign: "center",
  },
  skipText: {
    ...Fonts.skipText, // Assuming you have this style defined in Fonts
    color: Colors.white,
    marginTop: 20, // Adjust as needed
    fontstyle: "underline",
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
};

export default ImageButton;
