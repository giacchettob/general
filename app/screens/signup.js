import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#E87F00',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
});
