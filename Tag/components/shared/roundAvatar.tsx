import React, { useState } from "react";
import { Dimensions, StyleSheet , View, Text, Image} from "react-native";
import fonts from "../../branding/Fonts";
import Colors from "../../branding/Colors";
import Images from "../../assets/images/images";

interface AvatarProps {
  source?: any; // Change type to any or specify appropriate type for the source
}

const Avatar: React.FC<AvatarProps> = ({ source }: AvatarProps) => {
  return (
    <View>
      <Image style={styles.img} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  img : {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Avatar;