import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { screenHeight, screenWidth } from "../constants/Constants";
import { Button, Header, TextInputS } from "../components";
import { useAppDispatch } from "../redux/Store";
import { addNewUser } from "../redux/UserReducers";

const Add = () => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleSave = () => {
    const freshBlood = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    dispatch(addNewUser({ newUser: freshBlood }));
  };

  return (
    <SafeAreaView style={styles.contianer}>

      <Header title={"Add New User"} />
      <View style={styles.mainArea}>
        
      <TextInputS
        onTextChange={(text) => {
          setFirstName(text);
        }}
        placeholder={'First Name'}
      />
      <TextInputS
        onTextChange={(text) => {
          setLastName(text);
        }}
        placeholder={'Last Name'}
      />
      <TextInputS
        onTextChange={(text) => {
          setAge(text);
        }}
        placeholder={'Age'}
      />
      <Button
        onPress={() => {
          handleSave();
        }}
        text={"Save"}
      />

</View>
    </SafeAreaView>
  );
};

export default Add;
const styles = StyleSheet.create({
  contianer: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    backgroundColor: 'gray',
  },
  mainArea:{
    height: screenHeight * (1 - 0.08),
    width: screenWidth,
    justifyContent:"center",
    alignItems:"center",
  },
});
