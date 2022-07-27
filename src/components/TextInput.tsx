import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { screenHeight } from "../constants/Constants";

interface TextInputSProps {
  onTextChange: (text: string) => void;
  placeholder: string;
}

const TextInputS = (props: TextInputSProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(text) => props.onTextChange(text)}
      />
    </View>
  );
};

export default TextInputS;
const styles = StyleSheet.create({
  container: {
    marginVertical: screenHeight * 0.005,
  },
});
