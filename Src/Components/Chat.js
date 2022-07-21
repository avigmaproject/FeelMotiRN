import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
const Chat = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
              <MaterialCommunityIcons
                name={"keyboard-backspace"}
                size={40}
                color="#424242"
              />
            </TouchableOpacity>
            <Text style={styles.headertext}>Leslie Alexander</Text>
            <TouchableOpacity>
              <Ionicons
                name={"ios-call-outline"}
                size={25}
                color="#424242"
                style={styles.search}
              />
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  moti: {
    marginLeft: 5,
    height: 40,
    width: 70,
  },
  headertext: {
    marginTop: 3,
    marginRight: 10,
    fontSize: 24,
    color: "#424242",
    fontWeight: "600",
  },
  search: {
    marginTop: 5,
  },
});
export default Chat;
