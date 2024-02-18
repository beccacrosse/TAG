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
});

export default textStyle;
