import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Home";
import Addpost from "../Components/Addpost";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function AddTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Addpost" component={Addpost} />
    </Stack.Navigator>
  );
}
