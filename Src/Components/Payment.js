import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import pad from "../Assets/pad.png";

export default function Payment({ navigation }) {
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Payments"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 20,
          borderRadius: 10,
        }}
      >
        {/* <Image source={pad} style={styles.pad} />
        <Text style={styles.text}>You haven't made any payments yet</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pad: {
    marginTop: 80,
  },
  text: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    color: "rgba(00, 00, 00, 0.5)",
    fontWeight: "600",
  },
});
