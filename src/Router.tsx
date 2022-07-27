import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Details from "./screens/Details";
import Add from "./screens/Add";

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          animation: "fade",
        })}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={Details} />
        <RootStack.Screen name="Add" component={Add} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
