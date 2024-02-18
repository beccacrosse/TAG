import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList, Text, TouchableOpacity } from "react-native";
import Colors from "../../branding/Colors";
import fonts from "../../branding/Fonts";
import NextButton from "../../components/nextButton";

interface birthdayAnswerProps {
  text?: string;
  height?: number;
  width?: number;
  navigation?: any;
}
const Picker = ({ type, data, selectedItem, onChange }) => {
  const flatListRef = useRef(null);

  useEffect(() => {
    if (selectedItem && data.length > 0) {
      const index = data.indexOf(selectedItem);
      const centerPosition = styles.list.height / 2 - styles.item.height / 2;
      const offset = index * styles.item.height - centerPosition;
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ offset: offset, animated: false });
      }
    }
  }, [selectedItem, data]);

  const renderItem = ({ item }) => {
    const isSelected = item === selectedItem;
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => onChange(item)}
      >
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      style={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      showsVerticalScrollIndicator={false}
      initialScrollIndex={data.indexOf(selectedItem)}
      getItemLayout={(data, index) => ({
        length: styles.item.height,
        offset: styles.item.height * index,
        index,
      })}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  list: {
    height: 200,
    marginHorizontal: 4,
    alignContent: "center",
  },
  text: {
    fontFamily: fonts.answer.fontFamily,
    fontSize: 18,
    color: Colors.white,
  },
  selectedItem: {},
  selectedText: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const BirthdayPicker: React.FC<birthdayAnswerProps> = (
  props: birthdayAnswerProps
) => {
  let navigation = props.navigation;
  const [selectedYear, setSelectedYear] = useState("2000");
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [selectedDay, setSelectedDay] = useState("15");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) =>
    (currentYear - i).toString()
  );
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Check if all selections have been made
  const isComplete = selectedYear && selectedMonth && selectedDay;

  return (
    <View style={pickerStyles.container}>
      <View style={styles.row}>
        <Picker
          type="day"
          data={days}
          selectedItem={selectedDay}
          onChange={setSelectedDay}
        />
        <Picker
          type="month"
          data={months}
          selectedItem={selectedMonth}
          onChange={setSelectedMonth}
        />
        <Picker
          type="year"
          data={years}
          selectedItem={selectedYear}
          onChange={setSelectedYear}
        />
      </View>
      {isComplete && (
        <NextButton onPress={() => navigation.navigate("Birthday2")} />
      )}
    </View>
  );
};

const pickerStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default BirthdayPicker;
