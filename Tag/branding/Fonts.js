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
  prompt: {
    fontFamily: "Cutive",
    fontSize: 20,
    color: Colors.black,
    lineHeight: 40,
  },
  promptResponse: {
    fontFamily: "Snake",
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.black,
    lineHeight: 38,
  },
  responseHeader: {
    fontFamily: "Cutive",
    fontSize: 10,
    color: Colors.black,
  },
  header: {
    fontFamily: "PermanentMarker",
    fontSize: 24,
    color: Colors.white,
  },
  profileText: {
    fontFamily: "Poppins",
    fontSize: 28,
    color: Colors.white,
  },
  PoppinsBold: {
    fontFamily: "PoppinsBold",
  },
  loginLogo: {
    fontFamily: "PermanentMarker",
    fontSize: 130,
    color: Colors.white,
  },
});

export default textStyle;
