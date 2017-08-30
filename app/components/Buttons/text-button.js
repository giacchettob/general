import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class TextButton extends Component {
  render() {
    const { title, route, action } = this.props;
    return (
      <View>
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
  textButton: {
    marginTop: 10,
  },
  buttonText: {
    fontWeight: '500',
    color: '#A0A0A0',
  },
});