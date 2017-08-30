import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const boxWidth = Dimensions.get('window').width - 40;

export default class OrangeButton extends Component {
  render() {
    const { title, route, action } = this.props;
    return (
      <View>
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
  orangeButton: {
    backgroundColor: '#FF8C00',
    width: boxWidth,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
	},
});