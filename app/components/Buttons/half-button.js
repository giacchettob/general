import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const boxWidth = Dimensions.get('window').width / 2 - 25;

export default class HalfButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.halfButton}
				  onPress={onPress}>
				  <Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
	container: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  halfButton: {
    backgroundColor: '#FF8C00',
    width: boxWidth,
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