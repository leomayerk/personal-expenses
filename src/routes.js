import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import NewExpense from '~/pages/NewExpense';
import EditDetail from '~/pages/EditDetail';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="NewExpense" component={NewExpense}/>
        <AppStack.Screen name="EditDetail" component={EditDetail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
