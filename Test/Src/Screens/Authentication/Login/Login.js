import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import style from './Style';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Login </Text>
        <TextInput />
        <TextInput />
      </View>
    );
  }
}
