import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Addpost from "../Components/Addpost";
import AddStory from "../Components/AddStory";
import OnDemand from "../Components/OnDemand";

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
      <Stack.Screen name="AddStory" component={AddStory} />
      <Stack.Screen name="OnDemand" component={OnDemand} />
    </Stack.Navigator>
  );
}
