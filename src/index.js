import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constacts from './pages/Contacts';
import Information from './pages/Information';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Constacts" component={Constacts} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index
