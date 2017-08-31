import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const boxWidth = Dimensions.get('window').width - 40;

class OrangeButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.orangeButton}
				  onPress={onPress}>
				  <Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
      </View>
    );
  };
};

export default OrangeButton;

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