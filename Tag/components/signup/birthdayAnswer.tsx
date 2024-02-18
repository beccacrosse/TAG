import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../branding/Colors";
import fonts from "../../branding/Fonts";

const BirthdayPicker = () => {
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2000");

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
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) =>
    (currentYear - i).toString()
  );

  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map((month) => (
          <Picker.Item label={month} value={month} key={month} />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={selectedDay}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
      >
        {days.map((day) => (
          <Picker.Item label={day} value={day} key={day} />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={selectedYear}
        onValueChange={(itemValue) => setSelectedYear(itemValue)}
      >
        {years.map((year) => (
          <Picker.Item label={year} value={year} key={year} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  picker: {
    width: 100,
    height: 180,
    color: Colors.white,
    fontFamily: fonts.answer.fontFamily,
  },
});

export default BirthdayPicker;
