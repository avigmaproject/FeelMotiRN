import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Components/Home";
import HomeTab from "./HomeTab"
import SearchTab from "./SearchTab"

import React from "react";
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

export default  function Main() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let image;
          if (route.name === "HomeTab") {
            image = focused
              ? require("../Assets/homeactive.png")
              : require("../Assets/homedeactvive.png");
          } else if (route.name === "Send") {
            image = focused
              ? require("../Assets/sendactive.png")
              : require("../Assets/senddeactive.png");
          } else if (route.name === "SearchTab") {
            image = focused
              ? require("../Assets/searchactive.png")
              : require("../Assets/searchdeactive.png");
          } else if (route.name === "Add") {
            image = focused
              ? require("../Assets/adddeactive.png")
              : require("../Assets/adddeactive.png");
          } 
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25, resizeMode: "contain" }}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="SearchTab" component={SearchTab} />
      <Tab.Screen name="Send" component={Home} />
      <Tab.Screen name="Add" component={Home} />

    </Tab.Navigator>
  );
}
