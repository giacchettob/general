import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HalfButton from '../components/Buttons/half-button';
import OrangeButton from '../components/Buttons/orange-button';

import Home from './home';
import SignUp from './signup';

class Login extends Component {
  static navigationOptions = {
   header: null,
   backgroundColor: null,
  }
  render() {
    const { title, route, action } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Senha"
          style={styles.textInput}
        />
        <View style={styles.halfButtonContainer}>
          <HalfButton
            title='Login'
            action={navigate}
            route='Home'
          />
          <HalfButton
            title='Facebook'
            action={navigate}
            route='Home'
          />
        </View>
        <View style={styles.orangeButtonContainer}>
          <OrangeButton
            title='Crie uma nova conta'
            action={navigate}
            route='SignUp'
          />
        </View>
      </View>
    );
  };
};

export default StackNavigator({
	Login: { screen: Login },
  Home: { screen: Home },
  SignUp: { screen: SignUp }
});

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
  textInput: {
    backgroundColor: '#FFB459',
    width: '90%',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  halfButtonContainer: {
    flexDirection: 'row',
  },
  orangeButtonContainer: {
    flex: 0.1,
  },
});
