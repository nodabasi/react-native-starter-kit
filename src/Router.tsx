import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Home';

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          animation: 'fade',
        })}>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
