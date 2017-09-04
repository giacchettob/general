import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Dimensions } from 'react-native';

const boxWidth = Dimensions.get('window').width / 10;

class ImageButton extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.imageButton}
				  onPress={onPress}>
          <Image source={require('../images/logo.png')} style={styles.logo} />
			</TouchableHighlight>
      </View>
    );
  };
};

export default ImageButton;

const styles = StyleSheet.create({
  container: {
  },
  imageButton: {
    backgroundColor: '#FFB459',
    width: boxWidth,
    height: boxWidth,
    borderRadius: 50,
  },
  logo: {
    display: 'flex',
    width: boxWidth,
    height: boxWidth,
  },
});