import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const boxWidth = Dimensions.get('window').width / 10;

class FirstScreen extends Component { 
  static navigationOptions = ({ navigation }) => ({
    title: 'First Screen',
    headerLeft: (
      <TouchableHighlight
				onPress={() => {navigation.navigate('DrawerOpen')}}>
          <Image
            source={require('../components/images/logo.png')}
            style={{
              width: boxWidth,
              height: boxWidth,
              marginLeft: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
          />
      </TouchableHighlight>
    ),
    headerTintColor: "white",
    headerStyle: {
         backgroundColor: "#FFB459"
       },
    tabBarLabel: 'Screen 1',
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="card-membership"
          size={24}
          style={{color: tintColor}}
        />
      );
    }
  });
  render() {
    return(
      <View style={styles.container}>
        
      </View>
    );
  };
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageButton: {
    backgroundColor: '#FFB459',
    width: boxWidth,
    height: boxWidth,
    borderRadius: 50,
  },
  logo: {
    width: boxWidth,
    height: boxWidth,
  },
});