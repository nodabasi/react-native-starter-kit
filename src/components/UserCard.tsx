import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../constants/Constants';
import { useNavigation } from '@react-navigation/native';

interface UserCardProps {
    data:any;
}

const UserCard = (props:UserCardProps) => {
    const navigation = useNavigation()
    const handleOnPress=()=>{
        navigation.navigate("Details",{data:props.data});
    }
    console.log(props.data)

  return (
    <TouchableOpacity onPress={()=>handleOnPress()} style={styles.wrapper}> 
        <ImageBackground  resizeMode="cover" 
        source = {
            props.data?.image ? {uri:props.data.image}: require("../assets/png/white.png")
        } 
        style={styles.container}>
            <View style={styles.nameArea}>
                <Text style={styles.nameField}>{`${props.data.firstName} ${props.data.lastName}`}</Text>
            </View>
       </ImageBackground>
    </TouchableOpacity>
  )
}

export default UserCard
const styles= StyleSheet.create({
    wrapper:{
        marginHorizontal:screenWidth*0.03,
        marginVertical:screenHeight*0.01,
        borderRadius:10,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"magenta",
    },
    container:{
        width:screenWidth*0.4,
        height:screenWidth*0.4,
        justifyContent:"flex-end",
    },
    nameArea:{
        backgroundColor:"white",
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        paddingRight:screenWidth*0.01,
    },
    nameField:{
        alignSelf:"flex-end",
        fontSize:18,
        fontWeight:"500",

    },
})