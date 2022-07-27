import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../constants/Constants";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/png/catbyte.png')} />
      <Text>Loading</Text>
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },
});
