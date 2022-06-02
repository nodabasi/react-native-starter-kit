import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../constants/Constants';
import {RootState} from '../../redux/Store';
import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user.hello);
  return (
    <SafeAreaView style={styles.contianer}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  contianer: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
