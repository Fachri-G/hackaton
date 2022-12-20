import React from 'react';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import UploadRecorder from '../Screens/UploadRecorder';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SPLASH" component={Splash} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="UPLOADRECORDER" component={UploadRecorder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
