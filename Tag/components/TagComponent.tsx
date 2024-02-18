import React from "react";
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "../branding/Colors";
import fonts from "../branding/Fonts";
import { AntDesign } from "@expo/vector-icons";

const TagComponent = ({
  question,
  numberOfAnswers,
  totalAnswers = 4,
  images,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  return (
    <View style={styles.card}>
      <Pressable style={styles.heart} onPress={handlePress}>
        <AntDesign
          name={isPressed ? "heart" : "hearto"}
          color={isPressed ? "red" : "black"}
        />
      </Pressable>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.footer}>
        <Text style={styles.answerCount}>
          {numberOfAnswers}/{totalAnswers}
        </Text>
        <View style={styles.imageContainer}>
          {images.map((imagePath, index) => {
            <Image source={imagePath} style={styles.profilePic} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    alignContent: "center",
    alignItems: "center",
    margin: 8,
    flex: 1,
    height: 160,
    justifyContent: "space-between",
    textAlign: "center",
  },
  question: {
    fontWeight: "bold",
    color: "#333",
    fontFamily: fonts.question.fontFamily,
    fontSize: 11,
    marginTop: 20,
    textAlign: "center",
    lineHeight: 15,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "30%",
  },
  answerCount: {
    fontFamily: fonts.answer.fontFamily,
    fontSize: 10,
    marginTop: 10,
    color: "red",
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
  profilePic: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: -5,
  },
});

export default TagComponent;
