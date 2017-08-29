import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Forgot password</Text>
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
