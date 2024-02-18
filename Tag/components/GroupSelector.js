import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GroupOption from "./GroupOption";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../branding/Fonts";

//this is not currently scrollable, need to implement for future use
const GroupSelector = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const navigation = useNavigation();

  const handleSelectGroup = (groupName) => {
    setSelectedGroup(groupName);
    navigation.navigate("Home", { selectedGroupName: groupName });
  };

  return (
    <View style={[styles.container, styles.selectedText]}>
      <GroupOption name="Backend Baddies" onSelect={handleSelectGroup} />
      <GroupOption name="Family" onSelect={handleSelectGroup} />
      <GroupOption name="Home Friends" onSelect={handleSelectGroup} />
    </View>
  );
};

//{/* This Text component can be removed or kept for debugging purposes */} put above
//<Text style={styles.selectedText}>Selected Group: {selectedGroup}</Text>

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff", // Bootstrap primary button color
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  container: {
    padding: 20,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Cutive",
    color: "#00FFFFF",
  },
});

export default GroupSelector;
