import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Components/Home';
import EditProfile from '../Components/EditProfile';
import Profile from '../Components/Profile';
import Setting from '../Components/Setting';

import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />

      
    </Stack.Navigator>
  );
}
