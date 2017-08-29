import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import Login from './app/screens/login';

export default class general extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  };
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('general', () => general);
