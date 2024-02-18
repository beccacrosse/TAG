import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import FloatingBackButton from "../../components/backButton";
import TagComponent from "../../components/TagComponent";
import UserProfilePic from "../../assets/images/userprofilepic.jpg";
import Colors from "../../branding/Colors";
import Fonts from "../../branding/Fonts";

const data = [
  {
    id: "1",
    question: "What's something that you think I need to hear right now?",
    numberOfAnswers: "2",
    images: [
      "../assets/images/userprofilepic.jpg",
      "../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "2",
    question: "Send the last photo in your camera roll",
    numberOfAnswers: "2",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "3",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "4",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "5",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "6",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "7",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "8",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  {
    id: "9",
    question: "What song just feels like home?",
    numberOfAnswers: "3",
    images: [
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
      "../../assets/images/userprofilepic.jpg",
    ],
  },
  // ... more tags
];

function TagsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={UserProfilePic} style={styles.profilePic} />
          <Text style={styles.title}>Hots 🍑🐜</Text>
          <View style={styles.tabContainer}>
            <Text style={styles.tabActive}>Tags (231)</Text>
            <Text style={styles.tab}>Scraps (347)</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <TagComponent {...item} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
        />
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
    fontFamily: "Poppins",
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

export default TagsScreen;
