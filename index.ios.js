/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ActionSheetIOS,
} from 'react-native';

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class RNTest extends Component {

  _showMyActionSheet() {
  ActionSheetIOS.showActionSheetWithOptions({
    options: BUTTONS,
    cancelButtonIndex: CANCEL_INDEX,
    destructiveButtonIndex: DESTRUCTIVE_INDEX,
    title: 'Title',
    message: 'test Message goes here...',
  },
  (buttonIndex) => {
    alert('Option tapped');
  });
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
            <Button title="Tap here... to Show Actionsheet" onPress = {this._showMyActionSheet}>
            </Button>
      </View>
    );
  }

    testButton(){
        alert("button clicked");
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNTest', () => RNTest);
