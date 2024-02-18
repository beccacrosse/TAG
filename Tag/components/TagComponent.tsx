import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../branding/Colors";
import fonts from "../branding/Fonts";

const TagComponent = ({ question, numberOfAnswers, images }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.footer}>
        <Text style={styles.answerCount}>{numberOfAnswers}</Text>
        <View style={styles.imageContainer}>
          {images.map((imgSrc, index) => (
            <Image key={index} source={imgSrc} style={styles.image} />
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
    padding: 15,
    alignContent: "center",
    alignItems: "center",
    margin: 8,
    flex: 1,
    minHeight: 150,
    justifyContent: "space-between",
    textAlign: "center",
  },
  question: {
    fontWeight: "bold",
    color: "#333",
    fontFamily: fonts.question.fontFamily,
    fontSize: 11,
    marginVertical: 10,
    lineHeight: 15,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  answerCount: {
    fontSize: 14,
    color: Colors.black,
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: -5,
  },
});

export default TagComponent;
