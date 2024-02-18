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
            return (
              <Image key={index} source={imagePath} style={styles.image} />
            );
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
  },
  answerCount: {
    fontFamily: fonts.answer.fontFamily,
    fontSize: 10,
    marginTop: 5,
    color: "red",
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    marginLeft: -10,
  },
});

export default TagComponent;
