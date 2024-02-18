import { StyleSheet } from "react-native";
import Colors from "./Colors";
const textStyle = StyleSheet.create({
  question: {
    fontFamily: "Cutive",
    fontSize: 20,
    color: Colors.white,
  },
  answer: {
    fontFamily: "Cutivemono",
    fontSize: 44,
    color: Colors.white,
  },
  prompt: {
    fontFamily: "Cutive",
    fontSize: 20,
    color: Colors.black,
    lineHeight: 40
  },
  promptResponse: {
    fontFamily: "Cutivemono",
    fontSize: 20,
    color: Colors.black
  },
  responseHeader: {
    fontFamily: "Cutive",
    fontSize: 10,
    color: Colors.black
  }
});

export default textStyle;
