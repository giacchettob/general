import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './first-screen';
import SecondScreen from './second-screen';

const Home = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: FirstScreen,
    },
    Second: {
      path: '/',
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: 'red',
    },
  },
);

export default Home;