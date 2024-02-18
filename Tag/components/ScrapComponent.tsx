import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Fonts from "../branding/Fonts";
import Colors from "../branding/Colors";

const GallerySection = ({ title, count, data }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.thumbnailContainer}>
            <Image source={item.image} style={styles.thumbnail} />
            {item.isVideo && (
              <Text style={styles.durationLabel}>{item.duration}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: Fonts.profileText.fontFamily,
  },
  count: {
    fontSize: 20,
    color: "white",
  },
  thumbnailContainer: {
    marginRight: 10,
    position: "relative",
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  durationLabel: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: 2,
    borderRadius: 5,
  },
});

export default GallerySection;
