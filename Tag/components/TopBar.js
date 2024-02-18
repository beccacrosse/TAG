import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Ensure you're using React Navigation v5 or later
import fonts from "../branding/Fonts";
import SvgComponent from "../assets/images/groupsButton";
import UserProfilePic from "../assets/images/lucy.jpg";
import { getUserProfilePic } from "../DatabaseManager"; // Import the function

function TopBar() {
  const navigation = useNavigation();
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const userId = "1";
        const pic = await getUserProfilePic(userId);
        setProfilePic(pic);
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchProfilePicture();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("JoinorCreate")}
          style={styles.groupsButton}
        >
          <SvgComponent />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Tag</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyTagsScreen")}
          style={styles.profilePicButton}
        >
          <Image
            source={profilePic ? { uri: profilePic } : UserProfilePic}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "auto",
    paddingHorizontal: 10,
  },
  groupsButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  },
  textContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  buttonText: {
    ...fonts.loginLogo,
    fontSize: 32,
    alignContent: "center",
  },
  button: {
    padding: 10,
    marginHorizontal: 30,
  },
  profilePicButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
});

export default TopBar;
