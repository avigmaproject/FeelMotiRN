import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

export default function Button(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.submit}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#DBBE80",
    marginBottom: 45,
    borderRadius: 10,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
