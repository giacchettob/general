import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class TextButton extends Component {
  render() {
    const { title, route, action } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textButton}
				  onPress={ route ? () => action(route) : action}>
				  <Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
	container: {
    alignItems: 'center',
  },
  textButton: {
    marginTop: 50,
  },
  buttonText: {
    fontWeight: '500',
    color: '#A0A0A0',
  },
});