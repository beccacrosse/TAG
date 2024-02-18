import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import FloatingBackButton from "../../components/backButton";
import UserProfilePic from "../../assets/images/lucy.jpg";
import Colors from "../../branding/Colors";
import Fonts from "../../branding/Fonts";
import GallerySection from "../../components/ScrapComponent";
import photos from "../../scrapPhotos";
import videos from "../../scrapVideos";
import GroupPic from "../../assets/images/group.jpeg";

function ScrapsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={GroupPic} style={styles.profilePic} />
          <Text style={styles.title}>Hots 🍑🐜</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("TagsScreen")}>
              <Text style={styles.tab}>Tags (231)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ScrapsScreen")}
            >
              <Text style={styles.tabActive}>Scraps (347)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <GallerySection title="Photos >" count="247" data={photos} />
        <GallerySection title="Videos >" count="100" data={videos} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
    flexDirection: "column",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    ...Fonts.profileText,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tab: {
    color: "white",
    fontSize: 22,
    fontFamily: "Poppins",
  },
  tabActive: {
    color: "white",
    fontSize: 22,
    fontFamily: Fonts.PoppinsBold.fontFamily,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  row: {
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 8, // Match the margin of the cards for even spacing
  },
});

export default ScrapsScreen;
