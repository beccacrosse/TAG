import { StyleSheet } from "react-native";
import Colors from "./Colors";
const textStyle = StyleSheet.create({
  question: {
    fontFamily: "Cutive",
    fontSize: 28,
    color: Colors.white,
    lineHeight: 40,
  },
  answer: {
    fontFamily: "CutiveMono",
    fontSize: 44,
    color: Colors.white,
  },
});

export default textStyle;
