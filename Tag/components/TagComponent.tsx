import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TagComponent = ({ question, numberOfAnswers, images }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.footer}>
        <Text style={styles.answerCount}>{`${numberOfAnswers}/2`}</Text>
        <View style={styles.imageContainer}>
          {images.map((imgSrc, index) => (
            <Image key={index} source={{ uri: imgSrc }} style={styles.image} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "45%", // Adjust based on the width of the screen
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  answerCount: {
    fontSize: 14,
    color: "#666",
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
  },
});

export default TagComponent;
