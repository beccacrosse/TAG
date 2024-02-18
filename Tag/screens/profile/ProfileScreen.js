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
  // ... your tags data here
];
function TagsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FloatingBackButton navigation={navigation} />
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
        keyExtractor={(item, index) => `tag-${index}`}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
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
  backButton: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 18,
  },
  title: {
    color: "white",
    fontSize: 24,
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
    fontSize: 18,
  },
  tabActive: {
    color: "white",
    fontSize: 18,
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
});

export default TagsScreen;
