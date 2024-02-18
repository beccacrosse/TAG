import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../branding/Colors";
import { Platform } from "react-native";
import Fonts from "../branding/Fonts";

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
      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload from camera roll</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <TouchableOpacity onPress={takePhoto} style={styles.photoButton}>
        <Text style={styles.photoButtonText}>Take a photo</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: Colors.violet,
  },
  uploadButtonText: {
    ...Fonts.answer,
    textAlign: "center",
    fontWeight: "bold",
  },
  photoButton: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,

    backgroundColor: Colors.violet,
  },
  photoButtonText: {
    ...Fonts.answer,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
};

export default ImageButton;
