import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { setMenu } from "../store/action/profile/profile";
import { useSelector, useDispatch } from "react-redux";

export default function Menu({ navigation }) {
  const dispatch = useDispatch();
  const showmenu = useSelector((state) => state.profileReducer.showmenu);
  const CallPost = () => {
    dispatch(setMenu(!showmenu));
    navigation.navigate("AddPost", { screen: "AddPost" });
  };
  const CallStory = () => {
    dispatch(setMenu(!showmenu));
    navigation.navigate("AddTab", { screen: "AddStory" });
  };
  const ONDemand = () => {
    dispatch(setMenu(!showmenu));
    navigation.navigate("OnDemand", { screen: "OnDemand" });
  };

  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        zIndex: 1,
        right: 10,
        borderRadius: 5,
        height: "20%",
        width: "40%",
        paddingHorizontal: 10,
        // borderColor: "rgba(0,0,0,0.1)",
        borderColor: "#EBEBEB",
        borderWidth: 1,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
      }}
    >
      <TouchableOpacity
        onPress={() => CallPost()}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "33%",
          width: "100%",
        }}
      >
        <Text>Post</Text>
        <EvilIcons name={"image"} size={25} color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => CallStory()}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "33%",
          width: "100%",
          borderTopColor: "rgba(0,0,0,0.1)",
          borderTopWidth: 1,
        }}
      >
        <Text>Story</Text>

        <Ionicons name={"ios-add-circle-outline"} size={24} color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => ONDemand()}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "33%",
          width: "100%",
          borderTopColor: "rgba(0,0,0,0.1)",
          borderTopWidth: 1,
        }}
      >
        <Text>on-demand</Text>
        <MaterialIcons name={"ondemand-video"} size={24} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
}
