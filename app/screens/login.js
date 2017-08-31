import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HalfButton from '../components/Buttons/half-button';
import OrangeButton from '../components/Buttons/orange-button';
import TextButton from '../components/Buttons/text-button';

import Home from './home';
import SignUp from './signup';
import ForgotPassword from './forgot-password';

const windowHeight = Dimensions.get('window').height;
const imageWidth = Dimensions.get('window').width / 2;
const boxWidth = Dimensions.get('window').width - 40;

class Login extends Component {
  static navigationOptions = {
   header: null,
  }

  logIn(navigate) {
    navigate('Home')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}>
          
          <View style={styles.container}>

            <View>
              <Image source={require('../components/images/logo.png')} style={styles.image} />
            </View>

            <View>
              <Text style={styles.title}>Title</Text>
            </View>
            
            <View>
              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => this.Password.focus()}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                returnKeyType="go"
                secureTextEntry={true}
                ref={(password) => this.Password = password }
                onSubmitEditing={() => this.logIn(navigate)}
                style={styles.textInput}
              />
            </View>

            <View style={styles.halfButtonContainer}>
              <HalfButton
                title='Login'
                onPress={() => this.logIn(navigate)}
              />
              <HalfButton
                title='Facebook'
                onPress={() => this.logIn(navigate)}
              />  
            </View>

            <View>
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
          
        </ScrollView>
      </KeyboardAvoidingView>
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
    height: windowHeight,
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