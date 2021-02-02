import React, {Component} from 'react';
import Login from '../Screens/Authentication/Login/Login';
import Register from '../Screens/Authentication/Register/Register';
import Home from '../Screens/HomeContainer/HomeScreen/Home';
import PeopleDetail from '../Screens/HomeContainer/PeopleDetailScreen/PeopleDetail';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PeopleDetail" component={PeopleDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;
