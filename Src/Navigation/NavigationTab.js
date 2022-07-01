import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Home";
import Underconstruction from "../Components/Underconstruction";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function NavigationTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Underconstruction" component={Underconstruction} />
    </Stack.Navigator>
  );
}
