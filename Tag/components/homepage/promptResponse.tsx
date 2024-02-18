import React, { useState } from "react";
import { Dimensions, StyleSheet , View, Text, Image, Pressable} from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";
import Images from "../../assets/images/images";
import Style from "../../assets/themes/Style";
import Avatar from "../shared/roundAvatar";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


interface responseProps {
  avi?: any;
  name?: string;
  timestamp?: string;
  text?: string;
}

const Response: React.FC<responseProps> = (props: responseProps) => {
  let name = props.name;
  let time = props.timestamp;
  let text = props.text;
  let avi = props.avi;

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  
  return (
    <View style={styles.card}>
      <View style={styles.responseHeader}>
        <View style={styles.pfp}>
          <View style={{marginRight: 3}}><Avatar source={avi} /></View>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <Text style={styles.headerText}>{time}</Text>
      </View>

      <View style={styles.body}>
      <Text style={styles.responseFont}> {text}</Text>
      </View>
      <View>
        <View style={styles.footer}>
          <Pressable style={{marginRight: 5}}><FontAwesome name="comment-o" size={24} color="black" /></Pressable>
          <Pressable onPress={handlePress}>
            <AntDesign 
              name={isPressed ? "heart" : "hearto"}
              size={24} 
              color={isPressed ? "red" : "black"} 
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: "8%",
    paddingHorizontal: "8%",
    backgroundColor: Colors.white,
    height: 420,
    width: 326,
    borderRadius: 20,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  responseHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  pfp: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    fontFamily: "Cutivemono",
    fontSize: 18,
    lineHeight: 30,
    color: Colors.black,
    textAlign: "center",
    marginHorizontal: 3
  },
  body: {
    flex: 1,
    justifyContent: "center"
  },
  responseFont: {
    ...fonts.prompt,
    textAlign: "center",
    marginHorizontal: 3
  },
  footer: {
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25, // Half of the height
    marginRight: 10
  }
});

export default Response;