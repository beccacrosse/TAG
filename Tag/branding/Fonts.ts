import { StyleSheet } from "react-native";
import Colors from "./Colors";
import "./fonts.css"; // Adjust the path to where your font.css is located
const textStyle = StyleSheet.create({
  question: {
    fontFamily: "Cutive",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
});

export default textStyle;
