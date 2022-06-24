import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Components/Home';
import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function SearchTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
