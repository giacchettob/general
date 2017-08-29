import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HalfButton from '../components/Buttons/half-button';
import OrangeButton from '../components/Buttons/orange-button';
import TextButton from '../components/Buttons/text-button';

import Home from './home';
import SignUp from './signup';
import ForgotPassword from './forgot-password';

const imageWidth = Dimensions.get('window').width / 2;

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
        <Image source={require('../components/images/logo.png')} style={styles.image} />
        <Text style={styles.title}>Title</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="rgba(255,255,255,0.7)"
          autoCapitalize="none"
          returnKeyType="go"
          secureTextEntry={true}
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
        <View>
          <TextButton
            title='Esqueci a senha'
            action={navigate}
            route='ForgotPassword'
          />
        </View>
      </View>
    );
  };
};

export default StackNavigator({
	Login: { screen: Login },
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword }
});

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginBottom: 10,
  },
  title: {
    color: '#E87F00',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#FFB459',
    width: '90%',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    color: '#FFF',
    fontWeight: '500',
  },
  halfButtonContainer: {
    flexDirection: 'row',
  },
  orangeButtonContainer: {
    flex: 0.1,
  },
});
