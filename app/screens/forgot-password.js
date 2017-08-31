import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HalfButton from '../components/Buttons/half-button';

import Login from './login';
import ForgotPasswordSent from './forgot-password-sent';

const windowHeight = Dimensions.get('window').height;
const boxWidth = Dimensions.get('window').width - 40;

class ForgotPassword extends Component {
  static navigationOptions = {
   header: null,
  }

  passSent(navigate) {
    navigate('ForgotPasswordSent')
  }

  logIn(navigate) {
    navigate('Login')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}>
          
          <View style={styles.container}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Esqueci a senha</Text>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="go"
                onSubmitEditing={() => this.passSent(navigate)}
                style={styles.textInput}
              />
            </View>

            <View style={styles.halfButtonContainer}>
              <HalfButton
                title='Cancelar'
                onPress={() => this.logIn(navigate)}
              />
              <HalfButton
                title='Enviar'
                onPress={() => this.passSent(navigate)}
              />  
            </View>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
};

export default StackNavigator({
  ForgotPassword: { screen: ForgotPassword }
});

const styles = StyleSheet.create({
	container: {
    flex: 1,
    height: windowHeight,
  },
  titleContainer: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 2,
  },
  title: {
    color: '#E87F00',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  textInputContainer: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#FFB459',
    width: boxWidth,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    color: '#FFF',
    fontWeight: '500',
  },
  halfButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});