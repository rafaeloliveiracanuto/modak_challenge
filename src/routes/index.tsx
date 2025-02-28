import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details/index';

const Stack = createStackNavigator();

const RouteStacks = (
  <Stack.Navigator initialRouteName='Home'>
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
  return <NavigationContainer>{RouteStacks}</NavigationContainer>;
};

export default Routes;