import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../constants/Constants";

interface FeatureBoxProps {
  title: string;
  value: string | number;
}

const FeatureBox = (props: FeatureBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.valueArea}>
        <Text>{props.value}</Text>
      </View>
    </View>
  );
};

export default FeatureBox;
const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    flexDirection: "row",
    width: screenWidth * 0.8,
    height: screenHeight * 0.1,
    justifyContent: "space-between",
    marginVertical: screenHeight * 0.005,
    backgroundColor: 'gainsboro',
  },
  titleArea: {
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    width: screenWidth * 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueArea: {
    width: screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
