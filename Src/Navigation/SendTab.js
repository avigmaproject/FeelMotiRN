import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Message from "../Components/Message";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function SendTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}
