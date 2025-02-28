import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details/index';
import { Linking } from 'react-native';

const linking = {
  prefixes: ['modakChallenge://'], 
  config: {
    screens: {
      Home: 'products/category/:category',
      Details: 'products/:id',
    },
  },
};

const Stack = createStackNavigator();

const RouteStacks = (
  <Stack.Navigator initialRouteName='Home' >
    <Stack.Screen
      name='Home'
      component={Home}
      options={{title: 'Home'}}
    />
    <Stack.Screen
      name='Details'
      component={Details}
      options={({navigation}) => ({
        title: 'Details',
      })}
    />
  </Stack.Navigator>
);

const Routes = () => {
  return <NavigationContainer linking={linking}>{RouteStacks}</NavigationContainer>;
};

export default Routes;