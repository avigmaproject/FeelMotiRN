import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Search from "../Components/Search";

const Stack = createNativeStackNavigator();

export default function SearchTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
