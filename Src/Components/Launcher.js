import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
} from "react-native";
import home from "../Assets/home.png";
import * as Animatable from "react-native-animatable";

function Launcher({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#DBBE80" />
      <Animatable.View animation={"zoomInDown"}>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Image source={home} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBBE80",
  },
});
export default Launcher;
