import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import OrangeButton from '../components/Buttons/orange-button';

import Login from './login';

const windowHeight = Dimensions.get('window').height;

class ForgotPasswordSent extends Component {
  static navigationOptions = {
   header: null,
  }

  mainPage(navigate) {
    navigate('Login')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}>
          
        <View style={styles.container}>

          <View>
            <Text style={styles.title}>Recuperar a senha</Text>
          </View>
            
          <View>
            <Text style={styles.text}>Foi enviado um Email.</Text>
          </View>
              
          <View>
            <OrangeButton
              title='Login'
              onPress={() => this.mainPage(navigate)}
            />
          </View>

        </View>
          
      </ScrollView>
    );
  };
};

export default StackNavigator({
  ForgotPasswordSent: { screen: ForgotPasswordSent }
});

const styles = StyleSheet.create({
	container: {
    flex: 1,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#E87F00',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  text: {
    fontWeight: '500',
    color: '#A0A0A0',
    marginBottom: 30,
  },
});