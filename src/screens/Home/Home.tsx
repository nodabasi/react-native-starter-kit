import {Text, StyleSheet, SafeAreaView, FlatList, Image, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {screenHeight, screenWidth} from '../../constants/Constants';
import {RootState, useAppDispatch} from '../../redux/Store';
import { useSelector} from 'react-redux';
import { fetchUserData } from '../../redux/UserReducers';
import { Button, UserCard } from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation()
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused()

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Array<any>>([])

  const fetchUsersData=()=>{
    if(loading){
      dispatch(fetchUserData())
      .unwrap()
      .then(()=>{
        console.log(user.usersData)
  
        console.log("user.usersData")
        setLoading(false)
      })
    }else{
      console.log("here")
      setData(user.usersData)
    }
  }

  useEffect(() => {
    fetchUsersData()
  }, [])

  useEffect(() => {
    fetchUsersData()
  }, [isFocused])
  

  return (
    <SafeAreaView style={styles.contianer}>
      {loading?
      <View>  
        <Image source={require("../../assets/png/catbyte.png")} style={styles.loaderImage} />
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
     :

     <View>
      <FlatList showsVerticalScrollIndicator={false} data={user.usersData} 
      contentContainerStyle={
        styles.contentContainer
      }
      numColumns={2}
      keyExtractor={item => item.id}
       renderItem={({item}) => (
        <UserCard data={item}
        />
      )} />
      <View  style={styles.emptyArea}/>
      <Button onPress={()=>{
        navigation.navigate("Add");
      }} text={'Add'} />
      </View>
    }
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
    backgroundColor:"gray",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer:{
    backgroundColor:"gray",
    width:screenWidth,
    alignItems:"center",
    justifyContent:"space-around",
  },
  emptyArea: {
    height: screenHeight * 0.02,
  },
  loaderImage:{
    width:screenWidth,
    height:screenWidth,
  },
  loaderText:{
    alignSelf:"center",
    fontSize:24,
    fontWeight:"500",
    marginVertical:screenHeight*0.1,
  },
});
