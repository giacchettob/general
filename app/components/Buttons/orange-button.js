import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class OrangeButton extends Component {
  render() {
    const { title, route, action } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.orangeButton}
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
  orangeButton: {
    backgroundColor: '#FF8C00',
    width: '180%',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
	},
});