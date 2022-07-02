import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Home";
import EditProfile from "../Components/EditProfile";
import Profile from "../Components/Profile";
import Setting from "../Components/Setting";
import Wallet from "../Components/Wallet";
import Creator from "../Components/Creator";
import MySubscription from "../Components/MySubscription";
import Password from "../Components/Password";
import Explore from "../Components/Explore";

import * as React from "react";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Creator" component={Creator} />
      <Stack.Screen name="MySubscription" component={MySubscription} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Explore" component={Explore} />

    </Stack.Navigator>
  );
}
