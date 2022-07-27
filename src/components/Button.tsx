import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";;
import React from "react";import { screenHeight, screenWidth } from "../constants/Constants";
;

interface ButtonProps {
  onPress: () => void;
  text:string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    alignSelf:"center",
    width:screenWidth*0.5,
    backgroundColor:"cyan",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    
  },
  text:{
    marginVertical:screenHeight*0.02,
  },
})
