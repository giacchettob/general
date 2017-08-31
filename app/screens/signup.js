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
import Home from './home';

const windowHeight = Dimensions.get('window').height;
const boxWidth = Dimensions.get('window').width - 40;

class SignUp extends Component {
  static navigationOptions = {
   header: null,
  }

  signUp(navigate) {
    navigate('Home')
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
              <Text style={styles.title}>Cadastre-se</Text>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Nome"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.Sobrenome.focus()}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Sobrenome"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                ref={(sobrenome) => this.Sobrenome = sobrenome }
                onSubmitEditing={() => this.Email.focus()}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                ref={(email) => this.Email = email }
                onSubmitEditing={() => this.Password.focus()}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                returnKeyType="next"
                secureTextEntry={true}
                ref={(email) => this.Password = email }
                onSubmitEditing={() => this.PasswordConfirmation.focus()}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Confirme sua senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                autoCapitalize="none"
                returnKeyType="go"
                secureTextEntry={true}
                ref={(passwordConfirmation) => this.PasswordConfirmation = passwordConfirmation }
                onSubmitEditing={() => this.signUp(navigate)}
                style={styles.textInput}
              />
            </View>

            <View style={styles.halfButtonContainer}>
              <HalfButton
                title='Cancelar'
                onPress={() => this.logIn(navigate)}
              />
              <HalfButton
                title='Cadastrar'
                onPress={() => this.signUp(navigate)}
              />  
            </View>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
};

export default StackNavigator({
  SignUp: { screen: SignUp }
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
