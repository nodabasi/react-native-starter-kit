import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../constants/Constants";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.container}
    >
      <Text style={styles.headerText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: screenWidth,
    height: screenHeight * 0.08,
    backgroundColor: 'dark-gray',
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "400",
  },
});
