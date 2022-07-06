import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Home";
import SavePost from "../Components/SavePost";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function AddTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SavePost" component={SavePost} />
    </Stack.Navigator>
  );
}
